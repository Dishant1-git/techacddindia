import { CONTACT } from "@/data/content";

export default function DemoStrip() {
  return (
    <section className="demostrip">
      <div className="shell demostrip__inner">
        <div>
          <h3>Ready to start your career in tech?</h3>
          <p>Book a free demo class and see the lab before you decide.</p>
        </div>
        <div className="demostrip__actions">
          <a className="btn btn--primary btn--lg" href="#enquire">
            Book Free Demo
          </a>
          <a className="btn btn--outline btn--lg" href={CONTACT.phoneHref}>
            {CONTACT.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
