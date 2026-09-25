"use client";

import { useState, type FormEvent } from "react";
import { BRANCHES, CONTACT, HERO_FORM_COURSES } from "@/data/content";

type Note = { text: string; error: boolean };

type Props = {
  /** Recorded in the sheet's Source column so you can tell the two forms apart. */
  source: string;
  title?: string;
  subtitle?: string;
};

const UserIcon = () => (
  <svg viewBox="0 0 24 24">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 6 10-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);

const CapIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
    <path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export default function DemoForm({
  source,
  title = "Book a Free Demo Class",
  subtitle = "No registration fee. Talk to a counsellor first.",
}: Props) {
  const [note, setNote] = useState<Note>({ text: "", error: false });
  const [sending, setSending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      source,
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      course: String(data.get("course") ?? ""),
      branch: String(data.get("branch") ?? ""),
      /* Spam trap: a real person never fills this hidden field. */
      company: String(data.get("company") ?? ""),
    };

    if (payload.name.length < 2) {
      setNote({ text: "Please enter your full name.", error: true });
      return;
    }
    if (payload.phone.replace(/\D/g, "").length < 10) {
      setNote({ text: "Please enter a valid 10-digit mobile number.", error: true });
      return;
    }
    if (!payload.course) {
      setNote({ text: "Please choose a course.", error: true });
      return;
    }
    if (!payload.branch) {
      setNote({ text: "Please choose your nearest centre.", error: true });
      return;
    }

    setSending(true);
    setNote({ text: "Sending…", error: false });

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setNote({
          text: body?.error ?? "Could not send just now. Please call us instead.",
          error: true,
        });
        return;
      }

      setNote({
        text: `Thanks, ${payload.name.split(" ")[0]}! We'll call you about the ${payload.course} demo at ${payload.branch}.`,
        error: false,
      });
      form.reset();
    } catch {
      setNote({ text: "Network error. Please call us instead.", error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="leadform" onSubmit={onSubmit} noValidate>
      <div className="leadform__head">
        <p className="leadform__title">{title}</p>
        <p className="leadform__sub">{subtitle}</p>
      </div>

      <label className="lfield">
        <span className="lfield__icon" aria-hidden="true">
          <UserIcon />
        </span>
        <input type="text" name="name" placeholder="Full Name*" autoComplete="name" required />
      </label>

      <label className="lfield">
        <span className="lfield__icon" aria-hidden="true">
          <MailIcon />
        </span>
        <input type="email" name="email" placeholder="Email ID" autoComplete="email" />
      </label>

      <label className="lfield">
        <span className="lfield__icon" aria-hidden="true">
          <PhoneIcon />
        </span>
        <input type="tel" name="phone" placeholder="Mobile No.*" autoComplete="tel" required />
      </label>

      <label className="lfield">
        <span className="lfield__icon" aria-hidden="true">
          <CapIcon />
        </span>
        <select name="course" defaultValue="" required>
          <option value="" disabled>
            Choose Course*
          </option>
          {HERO_FORM_COURSES.map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>
      </label>

      <label className="lfield">
        <span className="lfield__icon" aria-hidden="true">
          <PinIcon />
        </span>
        <select name="branch" defaultValue="" required>
          <option value="" disabled>
            Choose Centre*
          </option>
          {BRANCHES.map((branch) => (
            <option key={branch}>{branch}</option>
          ))}
        </select>
      </label>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hp"
      />

      <button className="btn btn--yellow btn--lg btn--block" type="submit" disabled={sending}>
        {sending ? "Sending…" : "Book Free Demo Class"}
      </button>

      <p className={note.error ? "formnote is-error" : "formnote"} role="status">
        {note.text}
      </p>

      <p className="leadform__or">
        or call <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
      </p>
    </form>
  );
}
