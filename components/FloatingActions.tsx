"use client";

import { useEffect, useState } from "react";
import { ArrowUp, WhatsappIcon } from "./Icons";
import { CONTACT } from "@/data/content";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        className="fab fab--wa"
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <WhatsappIcon />
      </a>

      <button
        className={showTop ? "fab fab--top is-visible" : "fab fab--top"}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp />
      </button>
    </>
  );
}
