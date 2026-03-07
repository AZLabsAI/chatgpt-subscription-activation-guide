import Image from "next/image";
import { faqs, steps } from "./lib/content";

export default function Home() {
  return (
    <>
      <nav aria-label="Main navigation">
        <div className="nav-container">
          <a className="brand-mark link-shimmer-inline" href="#overview">
            ChatGPT Subscription Activation Guide
          </a>
          <ul className="nav-menu">
            <li>
              <a href="/matrix">Matrix</a>
            </li>
            <li>
              <a href="/hybrid">Hybrid</a>
            </li>
            <li>
              <a href="#overview">Overview</a>
            </li>
            <li>
              <a href="#steps">Steps</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#source">Source</a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <header className="hero-shell" id="overview">
          <div className="hero-gradient" aria-hidden="true" />
          <div className="hero-surface">
            <div className="eyebrow">Activation guide</div>
          <h1>ChatGPT Subscription Activation Guide</h1>
          <p className="subtitle">
            A focused activation walkthrough styled to feel at home inside the
            AZLabs.ai site system. No extra marketplace clutter, just the exact flow,
            screenshots, and checks required to complete activation cleanly.
          </p>

          <div className="contact-info">
            <a href="#steps">Browser only</a>
            <a href="#steps">6-step sequence</a>
            <a href="https://chatgpt.com/api/auth/session" target="_blank" rel="noreferrer">
              Session endpoint
            </a>
            <a href="#faq">Troubleshooting</a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy-card">
              <div className="hero-copy-meta">Quick run-through</div>
              <h2 className="hero-copy-title">The whole process is short, but the session step has to be exact.</h2>
              <p className="hero-copy-text">
                Sign in in-browser, open the session endpoint in the same login context,
                copy the full output, and submit it without editing it.
              </p>
              <div className="hero-cta-row">
                <a
                  className="cta-button cta-button--primary"
                  href="https://chatgpt.com/api/auth/session"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open session endpoint
                </a>
                <a className="cta-button cta-button--outlined" href="#steps">
                  Review the steps
                </a>
              </div>
            </div>

            <div className="status-grid">
              <div className="status-card">
                <span className="status-label">Environment</span>
                <strong>Browser session</strong>
              </div>
              <div className="status-card">
                <span className="status-label">Critical path</span>
                <strong>Session output</strong>
              </div>
              <div className="status-card">
                <span className="status-label">Failure signal</span>
                <strong>{`{}`}</strong>
              </div>
              <div className="status-card status-card--wide">
                <span className="status-label">Exact URL</span>
                <code>https://chatgpt.com/api/auth/session</code>
              </div>
            </div>
          </div>
          </div>
        </header>

        <section className="section" id="steps">
          <div className="section-header">
            <p className="section-eyebrow">Steps</p>
            <h2>Activation steps</h2>
            <p className="section-description">
              Follow the sequence exactly. The session page must be opened after login in
              the same browser context, and the copied output must be submitted without
              trimming or rewriting it.
            </p>
          </div>

          <div className="jobs">
            {steps.map((step) => (
              <article className="job" id={step.anchor} key={step.number}>
                <div className="job-duration">STEP {step.number}</div>
                <h3 className="job-title">{step.title}</h3>
                <div className="job-company">Activation procedure</div>
                <p>{step.description}</p>

                <ul>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {"image" in step && step.image ? (
                  <figure className="guide-image">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1280}
                      height={751}
                      className="guide-image__asset"
                      priority={step.number === "01"}
                    />
                    <figcaption>{step.image.caption}</figcaption>
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="faq">
          <div className="section-header">
            <p className="section-eyebrow">Checks</p>
            <h2>Failure checks</h2>
            <p className="section-description">
              These are the common points of failure from the source guide, kept in a
              tighter support-card format that matches the parent site aesthetic.
            </p>
          </div>
          <div className="skills">
            <article className="skill note-card">
              <div className="skill-name">If the page only shows {`{}`}</div>
              <p>
                That means the session endpoint is not seeing a valid logged-in browser
                session. Go back, sign in again, and reopen the same link.
              </p>
            </article>

            {faqs.map((item) => (
              <article className="skill" key={item.question}>
                <div className="skill-name">{item.question}</div>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="source">
          <div className="section-header">
            <p className="section-eyebrow">Source</p>
            <h2>Source trace</h2>
          </div>
          <p>
            The instruction copy and screenshots are adapted from the original activation
            guide, while the visual system here is now inspired by the real AZLabs.ai
            codebase: semantic surface tokens, soft blur cards, rounded buttons, clean
            section spacing, and a restrained blue-accent product site feel.
          </p>
          <div className="contact-info">
            <a href="https://www.g2a.com/instruction/marketplace/293/chatgpt-code" target="_blank" rel="noreferrer">
              Original guide
            </a>
            <a href="#overview">Back to top</a>
          </div>
        </section>
      </main>
    </>
  );
}
