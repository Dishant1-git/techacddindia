"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { ChevronDown } from "./Icons";
import {
  AI_DEVELOPMENT,
  AI_FUNDAMENTALS,
  CERTIFICATE_LINKS,
  CONTACT,
  COURSE_LINKS,
  DRAWER_LINKS,
  RESOURCE_LINKS,
  type NavTag,
} from "@/data/content";

const TAG_CLASS: Record<NavTag, string> = {
  hot: "tag tag--hot",
  new: "tag tag--new",
  trending: "tag",
};

const TAG_LABEL: Record<NavTag, string> = {
  hot: "Hot",
  new: "New",
  trending: "Trending",
};

/* Sections tracked for the active-link underline, in document order. */
const TRACKED = ["about", "courses", "branches", "reviews", "enquire"];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState("top");

  /* sticky header shadow */
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock the page behind the open drawer, and close it on Escape */
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [drawerOpen]);

  /* highlight the nav link for the section in view */
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = TRACKED.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const navClass = (href: string) =>
    `nav__link${href === `#${activeId}` ? " is-active" : ""}`;

  return (
    <>
      <header className={stuck ? "header is-stuck" : "header"} id="header">
        <div className="shell header__inner">
          <Logo />

          <nav className="nav" aria-label="Primary">
            <a className={navClass("#top")} href="#top">
              Home
            </a>
            <a className={navClass("#about")} href="#about">
              About
            </a>

            {/* AI mega menu */}
            <div className="nav__item has-mega">
              <button className="nav__link nav__link--btn" aria-expanded="false">
                AI <ChevronDown />
              </button>
              <div className="mega">
                <div className="mega__grid">
                  <div className="mega__col">
                    <p className="mega__title">AI Fundamentals</p>
                    {AI_FUNDAMENTALS.map((item) => (
                      <a key={item.label} href="#courses">
                        {item.label}
                        {item.tag && <span className={TAG_CLASS[item.tag]}>{TAG_LABEL[item.tag]}</span>}
                      </a>
                    ))}
                  </div>
                  <div className="mega__col">
                    <p className="mega__title">AI Development</p>
                    {AI_DEVELOPMENT.map((item) => (
                      <a key={item.label} href="#courses">
                        {item.label}
                        {item.tag && <span className={TAG_CLASS[item.tag]}>{TAG_LABEL[item.tag]}</span>}
                      </a>
                    ))}
                  </div>
                  <div className="mega__feature">
                    <p className="mega__eyebrow">Featured AI Course</p>
                    <p className="mega__heading">Artificial Intelligence Training in Jalandhar</p>
                    <p className="mega__copy">
                      Start with AI fundamentals, then move into real projects and career-ready tools.
                    </p>
                    <a className="btn btn--sm btn--primary" href="#courses">
                      Explore AI
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="nav__item has-drop">
              <button className="nav__link nav__link--btn" aria-expanded="false">
                Courses <ChevronDown />
              </button>
              <div className="drop">
                {COURSE_LINKS.map((label) => (
                  <a key={label} href="#courses">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div className="nav__item has-drop">
              <button className="nav__link nav__link--btn" aria-expanded="false">
                Certificate Programs <ChevronDown />
              </button>
              <div className="drop">
                {CERTIFICATE_LINKS.map((label) => (
                  <a key={label} href="#about">
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <a className={navClass("#courses")} href="#courses">
              After 12th
            </a>

            <a className={navClass("#branches")} href="#branches">
              Branches
            </a>

            <div className="nav__item has-drop">
              <button className="nav__link nav__link--btn" aria-expanded="false">
                Resources <ChevronDown />
              </button>
              <div className="drop">
                {RESOURCE_LINKS.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          <div className="header__cta">
            <a className="btn btn--ghost btn--sm" href={CONTACT.phoneHref}>
              Call us
            </a>
            <a className="btn btn--primary btn--sm" href="#enquire">
              Book Demo
            </a>
            <button
              className={drawerOpen ? "burger is-open" : "burger"}
              aria-label="Menu"
              aria-expanded={drawerOpen}
              onClick={() => setDrawerOpen((open) => !open)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={drawerOpen ? "drawer is-open" : "drawer"} aria-hidden={!drawerOpen}>
        <nav className="drawer__nav">
          {DRAWER_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setDrawerOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="drawer__cta">
          <a className="btn btn--primary" href="#enquire" onClick={() => setDrawerOpen(false)}>
            Book Demo
          </a>
          <a className="btn btn--ghost" href={CONTACT.phoneHref}>
            Call us
          </a>
        </div>
      </div>

      <div
        className={drawerOpen ? "scrim is-open" : "scrim"}
        onClick={() => setDrawerOpen(false)}
      />
    </>
  );
}
