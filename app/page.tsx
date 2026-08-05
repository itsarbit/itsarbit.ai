const writing = [
  {
    index: "01",
    title: "LLM Routers Are Not Enough",
    description:
      "Why per-request routing misses the point—and what workflow-level cost control looks like.",
    href: "https://itsarbit.substack.com/p/llm-routers-are-not-enough",
  },
  {
    index: "02",
    title:
      "Reproducible Testing Reveals the Hidden Risk in Autonomous Agents: Idempotency",
    description:
      "Why autonomous agents need deterministic testing, and how idempotency failures surface in production.",
    href: "https://itsarbit.substack.com/p/reproducible-testing-reveals-the",
  },
  {
    index: "03",
    title: "Agents Should Be Tested Like Applications, Not Evaluated Like Models",
    description:
      "The case for treating agent systems as software—with integration tests, not just evals.",
    href: "https://itsarbit.substack.com/p/agents-like-openclaw-should-be-tested",
  },
];

const capabilities = [
  "Production AI infrastructure",
  "Failure-aware orchestration",
  "Multi-provider reliability",
  "Budget-constrained routing",
  "Kubernetes",
  "Distributed systems",
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Arbit Chen, home">
          <span>AC</span>
          Arbit Chen
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#writing">Writing</a>
          <a href="mailto:arbitchen@gmail.com">Let&apos;s talk <Arrow /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Co-founder &amp; CTO · Systems builder</p>
          <h1>Infrastructure for AI that has to <em>work.</em></h1>
          <p className="hero-deck">
            I design AI systems that stay reliable under load, predictable under
            failure, and efficient under constraint.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">See the work ↓</a>
            <a className="button button-secondary" href="https://itsarbit.substack.com">
              Read my writing <Arrow />
            </a>
          </div>
        </div>

        <div className="signal-card" aria-label="Current focus">
          <div className="focus-heading">
            <span>Current focus</span>
            <span>2026—</span>
          </div>
          <div className="focus-list">
            <article>
              <span>01</span>
              <div>
                <h2>Reliable agents</h2>
                <p>Recover cleanly when tools, providers, and state fail.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h2>Cost-aware systems</h2>
                <p>Control spend across a workflow, not one request at a time.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h2>Reproducible testing</h2>
                <p>Treat agent behavior as software that can be verified.</p>
              </div>
            </article>
          </div>
          <div className="signal-meta">
            <p>Currently</p>
            <a href="https://www.arklex.ai">Co-founder &amp; CTO at Arklex AI <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="career-strip" aria-label="Selected experience">
        <div className="shell career-grid">
          <div className="career-label">Selected experience</div>
          <article>
            <span>Arklex AI</span>
            <strong>Co-founder &amp; CTO</strong>
            <p>Building production-ready agent systems.</p>
          </article>
          <article>
            <span>Airbnb</span>
            <strong>Infrastructure</strong>
            <p>Led Kubernetes migration at company scale.</p>
          </article>
          <article>
            <span>Gunrock</span>
            <strong>Co-builder</strong>
            <p>2018 Amazon Alexa Prize winner.</p>
          </article>
        </div>
      </section>

      <section className="work shell section" id="work">
        <div className="section-intro">
          <p className="kicker">Selected work / 01</p>
          <h2>Systems built for the messy part.</h2>
          <p>
            The interesting problems begin after the demo: traffic spikes, provider
            failures, runaway costs, and workflows that need to resume cleanly.
          </p>
        </div>

        <div className="project-grid">
          <article className="project-card project-dark">
            <div className="card-topline">
              <span>Open source · Agent testing</span>
              <span>01</span>
            </div>
            <div className="project-logo-wrap">
              <img src="/arklex-logo.svg" alt="Arklex" width="160" height="160" />
            </div>
            <div>
              <h3>ArkSim</h3>
              <p>
                Simulate realistic multi-turn conversations with AI agents,
                evaluate every turn, and find failures before real users do.
              </p>
              <div className="inline-actions">
                <a href="https://github.com/arklexai/arksim">GitHub <Arrow /></a>
                <a href="https://docs.arklex.ai/main/overview">Docs <Arrow /></a>
              </div>
            </div>
          </article>

          <article className="project-card project-accent">
            <div className="card-topline">
              <span>Open source · LLM infrastructure</span>
              <span>02</span>
            </div>
            <div className="route-visual" aria-hidden="true">
              <span>request</span>
              <i />
              <b>route</b>
              <i />
              <span>result</span>
            </div>
            <div>
              <h3>TokenWise</h3>
              <p>
                Budget-aware LLM routing and multi-provider failover, inspired by
                the patterns that real production systems demand.
              </p>
              <div className="inline-actions">
                <a href="https://github.com/itsarbit/tokenwise">GitHub <Arrow /></a>
                <a href="https://pypi.org/project/tokenwise-llm/">PyPI <Arrow /></a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="approach section">
        <div className="shell approach-grid">
          <div>
            <p className="kicker">Operating principles / 02</p>
            <h2>Make constraints part of the architecture.</h2>
          </div>
          <div className="principles">
            <article>
              <span>01</span>
              <div>
                <h3>Expect failure</h3>
                <p>Design recovery, fallback, and observability before the happy path ships.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Route with context</h3>
                <p>Optimize whole workflows—not isolated requests—for quality, latency, and cost.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Test the system</h3>
                <p>Treat agents like applications: reproducible, idempotent, and accountable.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="writing shell section" id="writing">
        <div className="writing-header">
          <div>
            <p className="kicker">Field notes / 03</p>
            <h2>Thinking in public.</h2>
          </div>
          <a href="https://itsarbit.substack.com">All writing <Arrow /></a>
        </div>
        <div className="article-list">
          {writing.map((article) => (
            <a className="article-row" href={article.href} key={article.index}>
              <span className="article-index">{article.index}</span>
              <div>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
              <span className="article-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="capabilities shell" aria-label="Capabilities and experience">
        <p className="kicker">Toolbox / 04</p>
        <div className="capability-cloud">
          {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
        </div>
        <p className="experience-line">
          Previously <a href="https://www.airbnb.com">Airbnb</a> and <a href="https://www.htc.com">HTC</a>
          <span>·</span> NTU alum
        </p>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div>
            <p className="kicker">Have a hard systems problem?</p>
            <h2>Let&apos;s make it work.</h2>
            <a className="footer-cta" href="mailto:arbitchen@gmail.com">
              arbitchen@gmail.com <Arrow />
            </a>
          </div>
          <div className="footer-links">
            <a href="https://github.com/itsarbit">GitHub <Arrow /></a>
            <a href="https://www.linkedin.com/in/itsarbit/">LinkedIn <Arrow /></a>
            <a href="https://itsarbit.substack.com">Substack <Arrow /></a>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Arbit Chen</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
