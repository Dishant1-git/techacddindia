import DemoForm from "./DemoForm";

const TICKS = ["Free career counselling", "No registration fee", "Placement support included"];

export default function FinalCta() {
  return (
    <section className="cta" id="enquire">
      <div className="shell cta__inner">
        <div className="cta__text reveal">
          <span className="eyebrow eyebrow--light">Ready to get started?</span>
          <h2 className="h2 h2--light">
            Start <em>building</em> your career today.
          </h2>
          <p className="lede lede--light">
            Talk to a counsellor today. One call is usually enough to know which track fits your
            degree, your schedule and the job you want.
          </p>
          <ul className="cta__ticks">
            {TICKS.map((tick) => (
              <li key={tick}>{tick}</li>
            ))}
          </ul>
        </div>

        <div className="cta__formwrap reveal">
          <DemoForm source="Enquiry form" />
        </div>
      </div>
    </section>
  );
}
