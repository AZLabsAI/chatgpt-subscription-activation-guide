import Image from "next/image";
import { CopyUrlBlock } from "./components/CopyUrlBlock";
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
            <h1>Complete the activation in six steps.</h1>
            <p className="subtitle">
              This page is here to help you complete the activation process clearly and
              quickly. The most important step is opening the session URL after login and
              copying the full output from that page.
            </p>

            <div className="contact-info">
              <a href="#steps">Browser only</a>
              <a href="#steps">6-step sequence</a>
              <a href="#faq">Troubleshooting</a>
            </div>

            <div className="hero-grid">
              <div className="hero-copy-card">
                <div className="hero-copy-meta">Start here</div>
                <h2 className="hero-copy-title">Copy the session URL, then follow the steps below.</h2>
                <p className="hero-copy-text">
                  First log in to ChatGPT in your browser. After that, use the copy block
                  below to copy the exact URL you need to open in the same browser session.
                </p>
                <CopyUrlBlock value="https://chatgpt.com/api/auth/session" />
              </div>

              <div className="status-grid">
                <div className="status-card">
                  <span className="status-label">Use</span>
                  <strong>Browser only</strong>
                </div>
                <div className="status-card">
                  <span className="status-label">Needed</span>
                  <strong>Logged-in session</strong>
                </div>
                <div className="status-card">
                  <span className="status-label">Watch for</span>
                  <strong>{`{}`}</strong>
                </div>
                <div className="status-card status-card--wide">
                  <span className="status-label">Timing</span>
                  <code>Activation usually completes in about 1 minute.</code>
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
              Follow the sequence in order. The session page must be opened after login in
              the same browser context, and the copied output must be submitted exactly as
              shown.
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
              If something does not work as expected, check these first. They cover the
              most common reasons the activation flow fails.
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
            guide. This page keeps the content focused on helping the user complete the
            process with as little friction as possible.
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
