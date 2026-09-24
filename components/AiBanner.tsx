const TAGS = [
  "Generative AI",
  "Agentic AI",
  "Prompt Engineering",
  "RAG Systems",
  "ChatGPT & AI Tools",
  "AI-Powered Marketing",
];

export default function AiBanner() {
  return (
    <section className="aibanner">
      <div className="shell aibanner__inner">
        <div className="aibanner__text">
          <span className="eyebrow eyebrow--light">Featured AI Course</span>
          <h2>Artificial Intelligence Training in Jalandhar</h2>
          <p>
            Start with AI fundamentals, then move into real projects and career-ready tools —
            generative AI, agents, RAG pipelines and prompt engineering.
          </p>
        </div>
        <div className="aibanner__tags">
          {TAGS.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a className="btn btn--yellow btn--lg" href="#courses">
          Explore AI
        </a>
      </div>
    </section>
  );
}
