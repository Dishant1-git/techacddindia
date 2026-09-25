import { GMB, TESTIMONIALS } from "@/data/content";
import { delay } from "@/lib/style";

/** The four-colour Google mark, used on the summary card and each review. */
function GoogleMark({ className = "gmark" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45.1 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.2-3.8 6.6-9.5 6.6-16.3Z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.9-2 14.5-5.2l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7A22 22 0 0 0 24 46Z"
      />
      <path fill="#FBBC05" d="M11.8 28.4a13.2 13.2 0 0 1 0-8.4v-5.7H4.5a22 22 0 0 0 0 19.8l7.3-5.7Z" />
      <path
        fill="#EA4335"
        d="M24 10.4c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3A22 22 0 0 0 4.5 14.3l7.3 5.7c1.7-5.2 6.5-9 12.2-9Z"
      />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="section" id="reviews">
      <div className="shell">
        <div className="sechead reveal">
          <span className="eyebrow">Reviews</span>
          <h2 className="h2">
            What our students say on <em>Google</em>
          </h2>
        </div>

        <div className="gmb">
          {/* Google Business Profile summary */}
          <aside className="gmbcard reveal">
            <div className="gmbcard__head">
              <GoogleMark />
              <div>
                <p className="gmbcard__name">techcadd Computer Education</p>
                <p className="gmbcard__meta">Google Business Profile · Jalandhar</p>
              </div>
            </div>

            <div className="gmbcard__score">
              <b>{GMB.rating}</b>
              <div>
                <span className="stars">★★★★★</span>
                <span className="gmbcard__count">Based on {GMB.reviews} Google reviews</span>
              </div>
            </div>

            <ul className="gmbbars">
              {[
                { star: 5, pct: 94 },
                { star: 4, pct: 5 },
                { star: 3, pct: 1 },
                { star: 2, pct: 0 },
                { star: 1, pct: 0 },
              ].map((row) => (
                <li key={row.star}>
                  <span className="gmbbars__n">{row.star}★</span>
                  <span className="gmbbars__track">
                    <i style={{ width: `${row.pct}%` }} />
                  </span>
                  <span className="gmbbars__pct">{row.pct}%</span>
                </li>
              ))}
            </ul>

            <a
              className="btn btn--outline btn--block"
              href={GMB.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read all reviews on Google
            </a>

            <p className="gmbcard__alumni">
              <strong>{GMB.alumni}</strong> alumni network across Punjab
            </p>
          </aside>

          {/* individual reviews */}
          <div className="gmbquotes">
            {TESTIMONIALS.map((item, i) => (
              <figure className="greview reveal" key={item.name} style={delay(i * 70)}>
                <div className="greview__top">
                  <span className="avatar">{item.initials}</span>
                  <div>
                    <b>{item.name}</b>
                    <em>{item.role}</em>
                  </div>
                  <GoogleMark className="gmark gmark--sm" />
                </div>
                <span className="stars">★★★★★</span>
                <blockquote>{item.quote}</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
