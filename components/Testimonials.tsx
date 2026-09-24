import { TESTIMONIALS } from "@/data/content";
import { delay } from "@/lib/style";

export default function Testimonials() {
  return (
    <section className="section section--tint" id="reviews">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <h2 className="h2">
              What our students say about <em>techcadd</em>
            </h2>
            <div className="ratingrow">
              <span className="stars">★★★★★</span>
              <strong>4.9/5 Rating</strong>
              <span className="sep">·</span>
              <strong>750+ Reviews</strong>
              <span className="sep">·</span>
              <strong>15K+ Alumni network</strong>
            </div>
          </div>
          <a className="btn btn--primary" href="#enquire">
            Get started today
          </a>
        </div>

        <div className="quotes">
          {TESTIMONIALS.map((item, i) => (
            <figure className="quote reveal" key={item.name} style={delay(i * 70)}>
              <span className="quote__src">
                <i className="g">G</i> Google
              </span>
              <blockquote>{item.quote}</blockquote>
              <figcaption>
                <span className="avatar">{item.initials}</span>
                <span>
                  <b>{item.name}</b>
                  <em>{item.role}</em>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
