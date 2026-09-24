import Stats from "./Stats";
import { CapIcon, CodeIcon, ShieldCheckIcon } from "./Icons";
import { delay } from "@/lib/style";

const FEATURES = [
  { Icon: CapIcon, title: "Industry Mentors", detail: "Taught by working engineers" },
  { Icon: CodeIcon, title: "Hands-on Projects", detail: "Live client projects" },
  { Icon: ShieldCheckIcon, title: "The Best Placements", detail: "500+ active hiring partners" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" />
      <div className="shell hero__inner">
        <span className="pill reveal">
          techcadd Jalandhar <i className="pill__dot" /> AI &amp; Software Training
        </span>

        <h1 className="hero__title reveal" style={delay(100)}>
          <span>Build The Skills That Turn</span>
          <span>
            You Into A <em>Job-Ready</em> Engineer
          </span>
          <span className="hero__title-bright">
            In AI &amp; Software <i className="code-chip">&lt;/&gt;</i> Engineering
          </span>
        </h1>

        <p className="hero__copy reveal" style={delay(200)}>
          Learn the AI, cloud and full-stack systems businesses actually run on. techcadd handles the
          curriculum, the live projects and the placement drives, so you only have to show up and build.
        </p>

        <div className="hero__actions reveal" style={delay(300)}>
          <a className="btn btn--primary btn--lg" href="#enquire">
            Start your career
          </a>
          <a className="btn btn--glass btn--lg" href="#categories">
            Explore courses
          </a>
        </div>

        <div className="hero__features reveal" style={delay(400)}>
          {FEATURES.map(({ Icon, title, detail }) => (
            <div className="feat" key={title}>
              <span className="feat__icon">
                <Icon />
              </span>
              <div>
                <strong>{title}</strong>
                <span>{detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Stats />
    </section>
  );
}
