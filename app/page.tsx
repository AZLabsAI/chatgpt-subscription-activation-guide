import Image from "next/image";
import { MatrixRain } from "./components/matrix-rain";

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
      <MatrixRain />

      <nav aria-label="Main navigation">
        <div className="nav-container">
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
        <header id="overview">
          <div className="eyebrow">SYSTEM GUIDE // CHATGPT SUBSCRIPTION ACTIVATION</div>
          <h1>ChatGPT Subscription Activation Guide</h1>
          <p className="subtitle">
            Same site theme. No extra branding. Just the activation flow, the session
            endpoint, and the screenshots needed to complete it correctly.
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
            <div className="terminal-card">
              <div className="terminal-header">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-title">activation-checklist.sh</span>
              </div>
              <ol className="terminal-list">
                <li>Open ChatGPT in a browser.</li>
                <li>Log in to the target account.</li>
                <li>Open the session endpoint in the same tab context.</li>
                <li>Copy the full session output.</li>
                <li>Paste it into the seller form.</li>
                <li>Wait about one minute for activation.</li>
              </ol>
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
        </header>

        <section className="section" id="steps">
          <h2>Activation Steps</h2>
          <p>
            Follow the sequence exactly. The session page must be opened after login in the
            same browser context, and the copied output must be submitted without trimming
            or rewriting it.
          </p>

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
          <h2>Failure Checks</h2>
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
          <h2>Source Trace</h2>
          <p>
            The instruction copy and screenshots are adapted from the original activation
            guide, while the page styling is aligned with the Matrix-themed parent site
            codebase that this guide may later live under.
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
