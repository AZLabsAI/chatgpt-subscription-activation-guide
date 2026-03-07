import Image from "next/image";
import Link from "next/link";
import { faqs, steps } from "../lib/content";
import styles from "./page.module.css";

export default function HybridPage() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.versions}>
          <Link className={styles.versionPill} href="/">AZLabs.ai version</Link>
          <Link className={styles.versionPill} href="/matrix">Matrix version</Link>
          <span className={styles.versionPill}>Hybrid version</span>
        </div>

        <section className={styles.heroWrap} id="overview">
          <div className={styles.heroScan} />
          <div className={styles.heroInner}>
            <div>
              <div className={styles.eyebrow}>Hybrid concept</div>
              <h1 className={styles.title}>
                ChatGPT Subscription Activation
                <span className={styles.titleAccent}>Guide.exe meets product design</span>
              </h1>
              <p className={styles.subtitle}>
                This version mixes both parents: the matrix-like urgency and terminal
                clarity of the first design, with the calmer AZLabs.ai structure,
                rounded surfaces, and polished product-site spacing of the second.
              </p>

              <div className={styles.chipRow}>
                <span className={styles.chip}>Dark-code hero</span>
                <span className={styles.chip}>Blue product framing</span>
                <a
                  className={styles.primaryLink}
                  href="https://chatgpt.com/api/auth/session"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open session endpoint
                </a>
                <a className={styles.secondaryLink} href="#steps">
                  Review all steps
                </a>
              </div>
            </div>

            <div className={styles.statusCol}>
              <div className={styles.terminalCard}>
                <h2>activation checklist</h2>
                <ol>
                  <li>Open ChatGPT in a browser.</li>
                  <li>Log in to the target account.</li>
                  <li>Open the session link in the same browser context.</li>
                  <li>Copy everything shown.</li>
                  <li>Submit it to the seller form.</li>
                </ol>
              </div>

              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Failure signal</span>
                <strong>{`{}`}</strong>
              </div>
              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Critical path</span>
                <strong>Session output</strong>
              </div>
              <div className={styles.statusCard}>
                <span className={styles.statusLabel}>Visual blend</span>
                <strong>Matrix x AZLabs.ai</strong>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section} id="steps">
          <p className={styles.sectionEyebrow}>Hybrid steps</p>
          <h2 className={styles.sectionTitle}>Activation steps with both moods in one layout</h2>
          <p className={styles.sectionIntro}>
            Each step keeps the same source instruction, but the presentation deliberately
            combines high-contrast dark cards with cleaner product-style hierarchy and
            lighter support surfaces.
          </p>

          <div className={styles.jobs}>
            {steps.map((step) => (
              <article className={styles.job} id={step.anchor} key={step.number}>
                <div className={styles.stepTag}>STEP {step.number}</div>
                <h3 className={styles.jobTitle}>{step.title}</h3>
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
          <p className={styles.sectionEyebrow}>Support cards</p>
          <h2 className={styles.sectionTitle}>Common failure checks</h2>
          <div className={styles.faqGrid}>
            {faqs.map((item) => (
              <article className={styles.faqCard} key={item.question}>
                <h3 className={styles.faqTitle}>{item.question}</h3>
                <p className={styles.faqText}>{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
