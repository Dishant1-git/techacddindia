import { POSTS } from "@/data/content";
import { ArrowRight } from "./Icons";
import { delay } from "@/lib/style";

export default function Blogs() {
  return (
    <section className="section section--tint" id="blogs">
      <div className="shell">
        <div className="sechead sechead--row reveal">
          <div>
            <span className="eyebrow">Blogs</span>
            <h2 className="h2">
              Notes from the classroom and the <em>codebase</em>
            </h2>
          </div>
          <a className="link-arrow" href="#">
            Read all posts <ArrowRight />
          </a>
        </div>

        <div className="posts">
          {POSTS.map((post, i) => (
            <article className="post reveal" key={post.title} style={delay(i * 70)}>
              <div className={`post__thumb post__thumb--${i + 1}`}>
                <span className="post__cat">{post.category}</span>
              </div>
              <div className="post__body">
                <span className="post__meta">
                  {post.date} · {post.read}
                </span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
