import { barHeight, delay } from "@/lib/style";

const CHART_BARS = [34, 48, 42, 66, 80, 100];
const CHART_YEARS = ["2020", "2021", "2022", "2023", "2024", "2025"];

const AI_TAGS = ["TensorFlow", "PyTorch", "LangChain", "Hugging Face"];

const FULLSTACK_METRICS = [
  { name: "React & Next.js", layer: "Frontend", delta: "+42%" },
  { name: "Node & Express", layer: "Backend", delta: "+31%" },
  { name: "MongoDB & SQL", layer: "Database", delta: "+27%" },
];

export default function FeaturedCourses() {
  return (
    <section className="section section--dark" id="courses">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow eyebrow--light">Featured Courses</span>
            <h2 className="h2 h2--light">
              Courses that get you <em>hired</em>
            </h2>
            <p className="lede lede--light">
              Industry-built curriculum, live projects and a placement cell behind every programme.
            </p>
          </div>
          <a className="btn btn--glass" href="#enquire">
            Browse all courses
          </a>
        </div>

        <div className="bento">
          {/* Cybersecurity — terminal */}
          <article className="bcard bcard--a reveal">
            <span className="bcard__badge">CEH-aligned syllabus</span>
            <h3>Cybersecurity &amp; Ethical Hacking</h3>
            <p>Live pentest labs, network hardening and incident response on real machines — not slides.</p>
            <div className="terminal">
              <span className="terminal__bar">
                <i />
                <i />
                <i />
              </span>
              <code>
                <span className="c-dim">$</span> nmap -sV 10.0.2.15
                <br />
                <span className="c-ok">22/tcp open ssh</span>
                <br />
                <span className="c-ok">80/tcp open http</span>
                <br />
                <span className="c-dim">$</span> <span className="cursor">_</span>
              </code>
            </div>
          </article>

          {/* Data Science — chart */}
          <article className="bcard bcard--b reveal" style={delay(80)}>
            <span className="bcard__badge bcard__badge--live">
              <i /> Live
            </span>
            <h3>Data Science &amp; Analytics</h3>
            <p>Analytics, dashboards and decision intelligence.</p>
            <div className="chart">
              <div className="chart__delta">+38%</div>
              <div className="chart__bars">
                {CHART_BARS.map((height, i) => (
                  <i key={CHART_YEARS[i]} style={barHeight(height)} />
                ))}
              </div>
              <div className="chart__x">
                {CHART_YEARS.map((year) => (
                  <span key={year}>{year}</span>
                ))}
              </div>
            </div>
          </article>

          {/* AI & ML */}
          <article className="bcard bcard--c reveal" style={delay(160)}>
            <span className="bcard__chip">AI</span>
            <h3>AI &amp; Machine Learning</h3>
            <p>Build models, agents and RAG pipelines that survive production.</p>
            <div className="minitags">
              {AI_TAGS.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>

          {/* Full-Stack — metrics */}
          <article className="bcard bcard--d reveal" style={delay(240)}>
            <h3>Full-Stack Development</h3>
            <p>
              MERN, MEAN and PHP stacks taught end to end: schema design, APIs, interfaces and
              deployment.
            </p>
            <div className="metrics">
              {FULLSTACK_METRICS.map((metric) => (
                <div className="metric" key={metric.name}>
                  <span>{metric.name}</span>
                  <em>{metric.layer}</em>
                  <b>{metric.delta}</b>
                </div>
              ))}
            </div>
            <p className="bcard__foot">
              <strong>92%</strong> placement rate, 2025 batches
            </p>
          </article>

          {/* Digital Marketing — alerts */}
          <article className="bcard bcard--e reveal" style={delay(320)}>
            <h3>Digital Marketing</h3>
            <p>Search, paid media, social and storefronts that convert.</p>
            <div className="alerts">
              <div className="alert">
                <span className="alert__k">New batch alert</span>
                Digital Marketing starts Monday
              </div>
              <div className="alert">
                <span className="alert__k alert__k--green">Placement drive</span>
                14 companies hiring this month
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
