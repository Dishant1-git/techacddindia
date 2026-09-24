"use client";

import { useState, type FormEvent } from "react";
import { CONTACT, COURSE_OPTIONS } from "@/data/content";
import { delay } from "@/lib/style";

type Note = { text: string; error: boolean };

export default function EnquiryForm() {
  const [note, setNote] = useState<Note>({ text: "", error: false });

  /**
   * Validates locally and confirms. Point this at a real endpoint
   * (a route handler or server action) to actually collect leads.
   */
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (name.length < 2) {
      setNote({ text: "Please enter your name.", error: true });
      return;
    }
    if (phone.replace(/\D/g, "").length < 10) {
      setNote({ text: "Please enter a valid 10-digit mobile number.", error: true });
      return;
    }

    setNote({
      text: `Thanks, ${name.split(" ")[0]}! A counsellor will call you shortly.`,
      error: false,
    });
    form.reset();
  }

  return (
    <form className="cta__form reveal" style={delay(120)} onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Full name</span>
        <input type="text" name="name" placeholder="Your name" required />
      </label>

      <label className="field">
        <span>Mobile number</span>
        <input
          type="tel"
          name="phone"
          placeholder="+91 00000 00000"
          pattern="[0-9+\s-]{10,15}"
          required
        />
      </label>

      <label className="field">
        <span>Course of interest</span>
        <select name="course" defaultValue={COURSE_OPTIONS[0]}>
          {COURSE_OPTIONS.map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>
      </label>

      <button className="btn btn--yellow btn--lg btn--block" type="submit">
        Book Demo
      </button>

      <p className="cta__or">
        or <a href={CONTACT.phoneHref}>Call now · {CONTACT.phone}</a>
      </p>

      <p className={note.error ? "formnote is-error" : "formnote"} role="status">
        {note.text}
      </p>
    </form>
  );
}
