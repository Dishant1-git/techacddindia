import type { CSSProperties } from "react";

/** Stagger delay for `.reveal` elements, as the `--d` custom property. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Brand dot colour for a technology chip, as the `--c` custom property. */
export const dotColor = (color: string) => ({ "--c": color }) as CSSProperties;

/** Bar height for the data-science chart, as the `--h` custom property. */
export const barHeight = (percent: number) => ({ "--h": `${percent}%` }) as CSSProperties;
