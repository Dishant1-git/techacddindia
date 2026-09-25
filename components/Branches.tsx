import { BRANCH_DETAILS } from "@/data/content";
import { PinIcon } from "./Icons";
import { delay } from "@/lib/style";

export default function Branches() {
  return (
    <section className="section section--tint" id="branches">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow">Branches</span>
            <h2 className="h2">
              Six centres across <em>Punjab</em>
            </h2>
            <p className="lede">
              Same curriculum, same trainers&apos; standard and the same placement cell at every
              centre. Walk into whichever one is closest to you.
            </p>
          </div>
          <a className="btn btn--primary" href="#enquire">
            Book a campus visit
          </a>
        </div>

        <div className="branches">
          {BRANCH_DETAILS.map((branch, i) => (
            <article
              className={branch.main ? "branch branch--main reveal" : "branch reveal"}
              key={branch.city}
              style={delay(i * 60)}
            >
              <span className="branch__icon">
                <PinIcon />
              </span>
              <div className="branch__body">
                <h3>
                  {branch.city}
                  {branch.main && <span className="branch__flag">Head office</span>}
                </h3>
                {branch.address ? (
                  <address>{branch.address}</address>
                ) : (
                  <p className="branch__areas">Serving {branch.areas}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
