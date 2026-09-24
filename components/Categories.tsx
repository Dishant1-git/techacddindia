import { CATEGORIES } from "@/data/content";
import { ArrowRight, CATEGORY_ICONS } from "./Icons";
import { delay } from "@/lib/style";

export default function Categories() {
  return (
    <section className="section" id="categories">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow">Categories</span>
            <h2 className="h2">
              Crafting careers with <em>technology</em> that works for you
            </h2>
          </div>
          <a className="link-arrow" href="#courses">
            All categories <ArrowRight />
          </a>
        </div>

        <div className="cats">
          {CATEGORIES.map((category, i) => {
            const Icon = CATEGORY_ICONS[category.icon];
            return (
              <a className="cat reveal" href="#courses" key={category.title} style={delay(i * 70)}>
                <span className="cat__icon">
                  <Icon />
                </span>
                <h3>{category.title}</h3>
                <p>{category.body}</p>
                <span className="cat__link">
                  Explore <i>→</i>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
