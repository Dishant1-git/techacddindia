import { CONTACT, DIFFERENTIATORS } from "@/data/content";
import { WHY_ICONS } from "./Icons";
import { delay } from "@/lib/style";

export default function WhyTechcadd() {
  return (
    <section className="section" id="why">
      <div className="shell why">
        <div className="why__intro reveal">
          <span className="eyebrow">Why techcadd?</span>
          <h2 className="h2">
            The <em>techcadd</em> Difference
          </h2>
          <p className="lede">
            For nearly a decade we&apos;ve been the training partner students and employers in
            Jalandhar keep coming back to, with 25,000+ engineers trained and a hiring network that
            answers when we call.
          </p>
          <div className="about__actions">
            <a className="btn btn--primary" href={CONTACT.phoneHref}>
              Call Now
            </a>
            <a className="btn btn--outline" href="#enquire">
              Book a Free Demo
            </a>
          </div>
        </div>

        <div className="why__grid">
          {DIFFERENTIATORS.map((item, i) => {
            const Icon = WHY_ICONS[item.icon];
            return (
              <article className="wcard reveal" key={item.title} style={delay(i * 80)}>
                <span className="wcard__icon">
                  <Icon />
                </span>
                <h3>{item.title}</h3>
                <p>
                  {item.body}
                  {item.strong && <strong>{item.strong}</strong>}
                  {item.tail}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
