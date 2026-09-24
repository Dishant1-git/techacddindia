import { STEPS } from "@/data/content";
import { delay } from "@/lib/style";

export default function HowItWorks() {
  return (
    <section className="section section--tint">
      <div className="shell">
        <div className="sechead reveal">
          <span className="eyebrow">How it works</span>
          <h2 className="h2">From your first counselling call to your first offer</h2>
        </div>

        <div className="steps">
          {STEPS.map((step, i) => (
            <article className="step reveal" key={step.title} style={delay(i * 100)}>
              <span className="step__when">{step.when}</span>
              <span className="step__num">{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
