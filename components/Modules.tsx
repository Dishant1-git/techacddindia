import { MODULES } from "@/data/content";
import { delay } from "@/lib/style";

export default function Modules() {
  return (
    <section className="section">
      <div className="shell">
        <div className="sechead reveal">
          <span className="eyebrow">Modules</span>
          <h2 className="h2">Included with every programme we run</h2>
          <p className="lede">
            Whichever category and intake you choose, all <strong>{MODULES.length}</strong> come
            bundled, with no upsell and no separate fee.
          </p>
        </div>

        <div className="mods">
          {MODULES.map((module, i) => (
            <article className="mod reveal" key={module.n} style={delay(i * 70)}>
              <span className="mod__n">{module.n}</span>
              <h3>{module.title}</h3>
              <p>{module.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
