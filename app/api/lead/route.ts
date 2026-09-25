import { NextResponse } from "next/server";

/**
 * Receives a demo-class enquiry and appends it to the Google Sheet via SheetDB.
 *
 * The SheetDB URL stays on the server: it is never sent to the browser, so the
 * sheet cannot be written to (or read) by anyone who views the page source.
 */

export const runtime = "nodejs";

/** Sheet column headers, in the order the sheet expects them. */
type Row = {
  Timestamp: string;
  Source: string;
  Name: string;
  Email: string;
  Mobile: string;
  Course: string;
  Centre: string;
};

const IST = new Intl.DateTimeFormat("en-IN", {
  timeZone: "Asia/Kolkata",
  dateStyle: "medium",
  timeStyle: "short",
});

function clean(value: unknown, max = 200) {
  return String(value ?? "")
    .replace(/[\r\n\t]+/g, " ")
    .trim()
    .slice(0, max);
}

export async function POST(request: Request) {
  const endpoint = process.env.SHEETDB_URL;

  if (!endpoint) {
    console.error("SHEETDB_URL is not set — the lead was not saved.");
    return NextResponse.json(
      { error: "Enquiries are not configured yet. Please call us instead." },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  /* Honeypot: bots fill every field, people never see this one. Accept and drop. */
  if (clean(body.company)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const phone = clean(body.phone, 20);
  const course = clean(body.course, 120);
  const branch = clean(body.branch, 60);
  const source = clean(body.source, 40) || "Website";

  /* Re-validate here — never trust what the browser sent. */
  if (name.length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json({ error: "Please enter a valid mobile number." }, { status: 400 });
  }
  if (!course) {
    return NextResponse.json({ error: "Please choose a course." }, { status: 400 });
  }
  if (!branch) {
    return NextResponse.json({ error: "Please choose a centre." }, { status: 400 });
  }

  const row: Row = {
    Timestamp: IST.format(new Date()),
    Source: source,
    Name: name,
    Email: email,
    Mobile: phone,
    Course: course,
    Centre: branch,
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      /* SheetDB expects { data: [ {column: value} ] }. */
      body: JSON.stringify({ data: [row] }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("SheetDB rejected the lead:", response.status, detail.slice(0, 300));
      return NextResponse.json(
        { error: "Could not save your enquiry. Please call us instead." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("SheetDB request failed:", error);
    return NextResponse.json(
      { error: "Could not reach our servers. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
