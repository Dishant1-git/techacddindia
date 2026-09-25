import DemoForm from "./DemoForm";
import { delay } from "@/lib/style";

const TRUST = [
  { figure: "25,000+", label: "Students trained since 2016" },
  { figure: "500+", label: "Active hiring partners" },
  { figure: "6", label: "Centres across Punjab" },
];

export default function LeadHero() {
  return (
    <section className="lead">
      <div className="lead__glow" />
      <div className="shell lead__inner">
        <div className="lead__copy">
          <span className="pill reveal">
            techcadd Computer Education <i className="pill__dot" /> Since 2016
          </span>

          <h1 className="lead__title reveal" style={delay(100)}>
            <span>Best IT Institute</span>
            <span className="lead__title-bright">
              in <em>Punjab</em>
            </span>
          </h1>

          <p className="lead__copytext reveal" style={delay(200)}>
            AI, full-stack, data science, cybersecurity, cloud and digital marketing — taught by
            engineers who still ship production code, on live client projects, with a placement cell
            behind every batch.
          </p>

          <div className="lead__trust reveal" style={delay(300)}>
            {TRUST.map((item) => (
              <div className="trust" key={item.label}>
                <b>{item.figure}</b>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="lead__rating reveal" style={delay(360)}>
            <span className="stars">★★★★★</span>
            <strong>4.9/5</strong> on Google · 556+ reviews
          </div>
        </div>

        <div className="lead__formwrap reveal" style={delay(160)}>
          <DemoForm source="Hero form" />
        </div>
      </div>
    </section>
  );
}
