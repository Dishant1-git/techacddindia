import { CONTACT, TRAINING_FORMATS } from "@/data/content";
import { delay } from "@/lib/style";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="shell about">
        <div className="about__left reveal">
          <span className="eyebrow">About Us</span>
          <h2 className="h2">
            A <em>decade</em> of turning students into engineers
          </h2>
          <p className="lede">
            techcadd is an IT company that trains the people who build with it. Every course is taught
            from the same stack we ship client work on, so the syllabus moves when the industry does,
            and your mentor is an engineer who still writes code for a living.
          </p>
          <div className="about__actions">
            <a className="btn btn--primary" href="#courses">
              Find your course
            </a>
            <a className="btn btn--outline" href={CONTACT.phoneHref}>
              Talk to a counsellor
            </a>
          </div>
          <p className="about__phone">
            Team techcadd · <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          </p>
        </div>

        <div className="about__right">
          {TRAINING_FORMATS.map((format, i) => (
            <article className="fmt reveal" key={format.term} style={delay(i * 80)}>
              <b>{format.term}</b>
              <span>{format.detail}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
