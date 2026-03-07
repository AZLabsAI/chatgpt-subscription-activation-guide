import Image from "next/image";

const steps = [
  {
    number: "01",
    anchor: "step-1",
    title: "Open ChatGPT in a browser",
    description:
      "Use a desktop or mobile browser to open ChatGPT. Do not start this flow inside the mobile app.",
    bullets: ["A browser session is required for the activation flow to work correctly."],
    image: {
      src: "/guide/step-1-login.webp",
      alt: "ChatGPT browser screen with the login button highlighted",
      caption: "Start on the browser version of ChatGPT and choose Log in.",
    },
  },
  {
    number: "02",
    anchor: "step-2",
    title: "Sign in to your account",
    description:
      "Log in with the account that should receive the subscription. If prompted, complete the standard sign-in flow first.",
    bullets: ["If a sign-in modal appears, continue through it before moving to the next step."],
    image: {
      src: "/guide/step-1-login-modal.webp",
      alt: "ChatGPT login modal with sign-in options",
      caption: "Complete the sign-in prompt until your browser session is active.",
    },
  },
  {
    number: "03",
    anchor: "step-3",
    title: "Open the session page",
    description:
      "After you are signed in, open the session endpoint directly in the same browser session.",
    bullets: ["Use this exact URL: https://chatgpt.com/api/auth/session"],
    image: {
      src: "/guide/step-2-session.webp",
      alt: "Browser tab showing the ChatGPT session page with account session data",
      caption: "The session page should display account session text when you are logged in correctly.",
    },
  },
  {
    number: "04",
    anchor: "step-4",
    title: "Copy everything shown on the page",
    description:
      "Once the session page loads, copy the full text visible on screen. It should be the complete session output, not a partial selection.",
    bullets: ["If the page shows only `{}`, you are not logged in properly and need to sign in again."],
  },
  {
    number: "05",
    anchor: "step-5",
    title: "Paste the copied text into the seller form",
    description:
      "After purchase, paste the copied session text into the form provided for activation.",
    bullets: ["Submit exactly what was copied from the session page."],
  },
  {
    number: "06",
    anchor: "step-6",
    title: "Wait for activation to complete",
    description:
      "The subscription should activate automatically in about one minute after the session text is submitted.",
    bullets: ["For extra safety, you can log out of all devices after activation is complete."],
  },
] as const;

const faqs = [
  {
    question: "What if the session page only shows {}?",
    answer:
      "That usually means the browser session is not signed in correctly. Return to ChatGPT, log in again, and reopen the session link.",
  },
  {
    question: "How long does activation usually take?",
    answer:
      "The original guide says the process is automatic and typically completes within about one minute after submission.",
  },
  {
    question: "Should this be done in the mobile app?",
    answer:
      "No. The activation flow should be completed in a browser, even if you are on a phone.",
  },
] as const;

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
