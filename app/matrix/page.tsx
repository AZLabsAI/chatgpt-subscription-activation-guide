import Image from "next/image";
import Link from "next/link";
import { MatrixRain } from "../components/MatrixRain";
import { faqs, steps } from "../lib/content";
import styles from "./page.module.css";

export default function MatrixPage() {
  return (
    <div className={styles.page}>
      <MatrixRain className={styles.matrixCanvas} />

      <nav aria-label="Matrix navigation" className={styles.nav}>
        <div className={styles.navInner}>
          <ul className={styles.navMenu}>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#steps">Steps</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="/hybrid">Hybrid</a></li>
          </ul>
        </div>
      </nav>

      <main className={styles.container}>
        <header className={styles.header} id="overview">
          <div className={styles.eyebrow}>SYSTEM GUIDE // CHATGPT SUBSCRIPTION ACTIVATION</div>
          <h1 className={styles.title}>ChatGPT Subscription Activation Guide</h1>
          <p className={styles.subtitle}>
            The original Matrix-flavored version is preserved here intact: dark terminal
            atmosphere, neon green accents, and a high-contrast instructional layout.
          </p>

          <div className={styles.pillRow}>
            <Link href="/">AZLabs.ai version</Link>
            <Link href="/hybrid">Hybrid version</Link>
            <a href="https://chatgpt.com/api/auth/session" target="_blank" rel="noreferrer">
              Session endpoint
            </a>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.terminalCard}>
              <div className={styles.terminalHeader}>
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalDot} />
                <span className={styles.terminalTitle}>activation-checklist.sh</span>
              </div>
              <ol className={styles.terminalList}>
                <li>Open ChatGPT in a browser.</li>
                <li>Log in to the target account.</li>
                <li>Open the session endpoint in the same tab context.</li>
                <li>Copy the full session output.</li>
                <li>Paste it into the seller form.</li>
                <li>Wait about one minute for activation.</li>
              </ol>
            </div>

            <div className={styles.statusGrid}>
              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Environment</span>
                <strong>Browser session</strong>
              </div>
              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Critical path</span>
                <strong>Session output</strong>
              </div>
              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Failure signal</span>
                <strong>{`{}`}</strong>
              </div>
              <div className={`${styles.statusCard} ${styles.statusWide}`}>
                <span className={styles.statusLabel}>Exact URL</span>
                <code>https://chatgpt.com/api/auth/session</code>
              </div>
            </div>
          </div>
        </header>

        <section className={styles.section} id="steps">
          <h2>Activation Steps</h2>
          <div className={styles.jobs}>
            {steps.map((step) => (
              <article className={styles.job} id={step.anchor} key={step.number}>
                <div className={styles.duration}>STEP {step.number}</div>
                <h3 className={styles.jobTitle}>{step.title}</h3>
                <div className={styles.jobCompany}>Activation procedure</div>
                <p className={styles.jobText}>{step.description}</p>
                <ul className={styles.bulletList}>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {"image" in step && step.image ? (
                  <figure className={styles.imageWrap}>
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1280}
                      height={751}
                      className={styles.image}
                    />
                    <figcaption className={styles.caption}>{step.image.caption}</figcaption>
                  </figure>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="faq">
          <h2>Failure Checks</h2>
          <div className={styles.cardGrid}>
            {faqs.map((item) => (
              <article className={styles.faqCard} key={item.question}>
                <h3 className={styles.jobTitle}>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
