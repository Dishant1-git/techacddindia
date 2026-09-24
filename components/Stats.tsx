"use client";

import { useEffect, useRef } from "react";
import { HERO_STATS } from "@/data/content";

type CounterProps = { value: number; decimals?: number; suffix?: string };

function format(value: number, decimals: number, suffix: string) {
  const body = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString("en-IN");
  return body + suffix;
}

/**
 * Renders the final figure, so it is present in the server HTML and for anyone
 * with JavaScript or animation disabled. When motion is allowed, the effect
 * drives the count-up by writing to the node directly — no re-renders.
 */
function Counter({ value, decimals = 0, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    let frame = 0;
    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        io.unobserve(entry.target);

        const start = performance.now();
        const duration = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(value * eased, decimals, suffix);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      el.textContent = format(value, decimals, suffix);
    };
  }, [value, decimals, suffix]);

  return <b ref={ref}>{format(value, decimals, suffix)}</b>;
}

export default function Stats() {
  return (
    <div className="hero__stats">
      <div className="shell statgrid">
        {HERO_STATS.map((stat) => (
          <div className="stat" key={stat.label}>
            {"staticValue" in stat ? (
              <b>{stat.staticValue}</b>
            ) : (
              <Counter
                value={stat.value}
                decimals={"decimals" in stat ? stat.decimals : 0}
                suffix={"suffix" in stat ? stat.suffix : ""}
              />
            )}
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
