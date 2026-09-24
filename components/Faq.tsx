"use client";

import { useState } from "react";
import { FAQS } from "@/data/content";
import { ArrowRight } from "./Icons";

export default function Faq() {
  /* Controlled so only one answer is open at a time, matching the original. */
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="shell faq">
        <div className="faq__intro reveal">
          <h2 className="h2">
            Frequently asked <em>questions</em>
          </h2>
          <p className="lede">
            Find quick answers to common questions about our courses, batches, fees and placement
            support.
          </p>
          <a className="link-arrow" href="#enquire">
            See all questions <ArrowRight />
          </a>
        </div>

        <div className="faq__list">
          {FAQS.map((faq, i) => (
            <details className="acc reveal" key={faq.q} open={open === i}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === i ? -1 : i);
                }}
              >
                {faq.q}
              </summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
