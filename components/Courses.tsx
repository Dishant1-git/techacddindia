"use client";

import { useState } from "react";
import { COURSE_CATALOGUE } from "@/data/content";
import { BRAND_ICONS } from "@/data/brandIcons";
import { delay } from "@/lib/style";

/** "MERN Stack" -> "MS", "AWS" -> "AW". Two letters, always. */
function initials(name: string) {
  const words = name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean);
  const letters =
    words.length > 1 ? words[0][0] + words[1][0] : (words[0] ?? "").slice(0, 2);
  return letters.toUpperCase();
}

type Course = { name: string; desc: string; icon?: string };

/**
 * The brand logo where one exists, otherwise a two-letter chip. Several
 * courses (Microsoft, Adobe, Amazon and Tableau products) have no logo in
 * the icon set, so they use the fallback.
 */
function CourseBadge({ course }: { course: Course }) {
  const brand = course.icon ? BRAND_ICONS[course.icon] : undefined;

  if (!brand) {
    return (
      <span className="course__badge" aria-hidden="true">
        {initials(course.name)}
      </span>
    );
  }

  return (
    <span className="course__badge course__badge--logo" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img" focusable="false">
        <path d={brand.path} fill={brand.hex} />
      </svg>
    </span>
  );
}

export default function Courses() {
  const [active, setActive] = useState(COURSE_CATALOGUE[0].key);
  const group = COURSE_CATALOGUE.find((g) => g.key === active) ?? COURSE_CATALOGUE[0];

  return (
    <section className="section section--dark" id="courses">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow eyebrow--light">Courses</span>
            <h2 className="h2 h2--light">
              Best IT, AI &amp; software courses in <em>Punjab</em>
            </h2>
            <p className="lede lede--light">
              From AI and data to full-stack and cloud, each track is built like real industry work:
              mentor-led labs, live projects, interview-focused outcomes and placement support.
            </p>
          </div>
          <a className="btn btn--yellow" href="#enquire">
            Book a free demo class
          </a>
        </div>

        <div className="tech__tabs" role="tablist">
          {COURSE_CATALOGUE.map((g) => (
            <button
              key={g.key}
              role="tab"
              aria-selected={g.key === active}
              className={g.key === active ? "ttab is-active" : "ttab"}
              onClick={() => setActive(g.key)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <p className="courses__blurb">{group.blurb}</p>

        <div className="courses">
          {group.courses.map((course, i) => (
            <a className="course" href="#enquire" key={course.name} style={delay(i * 35)}>
              <CourseBadge course={course} />
              <span className="course__body">
                <b>{course.name}</b>
                <em>Live projects · Placement support</em>
              </span>
              <span className="course__go" aria-hidden="true">
                →
              </span>
              {/* Shown on hover of the logo, and on keyboard focus of the card. */}
              <span className="course__tip" role="tooltip">
                {course.desc}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
