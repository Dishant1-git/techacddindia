"use client";

import { useState } from "react";
import { TECH_GROUPS } from "@/data/content";
import { dotColor } from "@/lib/style";

export default function Technologies() {
  const [active, setActive] = useState(TECH_GROUPS[0].key);

  return (
    <section className="section section--dark">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow eyebrow--light">Technologies</span>
            <h2 className="h2 h2--light">
              Technologies We <em>Master</em>
            </h2>
            <p className="lede lede--light">
              From <strong>AI</strong> to <strong>Cloud</strong>, from <strong>Web Development</strong>{" "}
              to <strong>CAD/CAM</strong>, we train you on the latest and most in-demand technologies
              to build a successful career.
            </p>
          </div>
          <a className="btn btn--glass" href="#enquire">
            Explore all technologies
          </a>
        </div>

        <div className="tech">
          <div className="tech__tabs" role="tablist">
            {TECH_GROUPS.map((group) => (
              <button
                key={group.key}
                role="tab"
                aria-selected={group.key === active}
                className={group.key === active ? "ttab is-active" : "ttab"}
                onClick={() => setActive(group.key)}
              >
                {group.label}
              </button>
            ))}
          </div>

          <div className="tech__panels">
            {TECH_GROUPS.map((group) => (
              <div
                key={group.key}
                className={group.key === active ? "tpanel is-active" : "tpanel"}
              >
                {group.items.map((item) => (
                  <span key={item.name} style={dotColor(item.color)}>
                    {item.name}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <p className="tech__foot">
            <strong>techcadd</strong> · 100+ technologies taught and growing
          </p>
        </div>
      </div>
    </section>
  );
}
