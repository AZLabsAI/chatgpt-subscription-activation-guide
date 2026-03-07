import Image from "next/image";

const steps = [
  {
    number: "01",
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
    title: "Copy everything shown on the page",
    description:
      "Once the session page loads, copy the full text visible on screen. It should be the complete session output, not a partial selection.",
    bullets: ["If the page shows only `{}`, you are not logged in properly and need to sign in again."],
  },
  {
    number: "05",
    title: "Paste the copied text into the seller form",
    description:
      "After purchase, paste the copied session text into the form provided for activation.",
    bullets: ["Submit exactly what was copied from the session page."],
  },
  {
    number: "06",
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
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(201,167,92,0.22),transparent_30%),linear-gradient(180deg,#f6f0e7_0%,#efe4d6_42%,#e3d3c3_100%)] text-stone-950">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-5 py-8 sm:px-8 lg:px-12">
        <div className="guide-shell overflow-hidden rounded-[2rem] border border-black/10 bg-[#fffaf4]/90 shadow-[0_24px_80px_rgba(75,54,32,0.16)] backdrop-blur">
          <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-14">
            <div className="space-y-8">
              <div className="flex flex-wrap items-center gap-3 text-sm uppercase tracking-[0.28em] text-stone-600">
                <span className="rounded-full border border-stone-300 bg-white/70 px-3 py-1">
                  Activation only
                </span>
                <span>Browser required</span>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-stone-500">
                  ChatGPT subscription activation guide
                </p>
                <h1 className="max-w-3xl font-[family:var(--font-fraunces)] text-5xl leading-none tracking-tight text-stone-950 sm:text-6xl">
                  A clean step-by-step page for activating the subscription correctly.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
                  This page keeps only the activation instructions. Follow the browser flow
                  below, copy the session output exactly, and submit it to complete the
                  activation.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Where</p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">In a browser</p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Key link</p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">Session endpoint</p>
                </div>
                <div className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Timing</p>
                  <p className="mt-2 text-lg font-semibold text-stone-900">About 1 minute</p>
                </div>
              </div>
            </div>

            <aside className="relative overflow-hidden rounded-[1.75rem] border border-stone-200 bg-[#1d1b18] p-6 text-stone-100">
              <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(255,224,158,0.28),transparent_58%)]" />
              <div className="relative space-y-5">
                <p className="text-xs uppercase tracking-[0.24em] text-stone-400">Quick run-through</p>
                <ol className="space-y-4">
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-stone-400">1</p>
                    <p className="mt-1 text-base font-semibold">Sign in on the browser version of ChatGPT</p>
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-stone-400">2</p>
                    <p className="mt-1 text-base font-semibold">Open the session link in the same browser</p>
                  </li>
                  <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-stone-400">3</p>
                    <p className="mt-1 text-base font-semibold">Copy everything shown and submit it</p>
                  </li>
                </ol>

                <div className="rounded-[1.5rem] border border-amber-300/30 bg-amber-100/10 p-5">
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-200">Exact link to open</p>
                  <a
                    className="mt-3 block break-all text-lg font-semibold text-white underline decoration-amber-300/60 underline-offset-4"
                    href="https://chatgpt.com/api/auth/session"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://chatgpt.com/api/auth/session
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_50px_rgba(75,54,32,0.08)] sm:p-8">
            <div className="mb-8 flex items-end justify-between gap-4 border-b border-stone-200 pb-5">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Instructions</p>
                <h2 className="mt-2 font-[family:var(--font-fraunces)] text-3xl text-stone-950 sm:text-4xl">
                  Activation steps
                </h2>
              </div>
              <p className="max-w-sm text-right text-sm leading-6 text-stone-600">
                Follow the steps in order. The most important part is copying the full
                session output after logging in.
              </p>
            </div>

            <div className="space-y-5">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.75rem] border border-stone-200 bg-[#fffdfa] p-5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-stone-950 text-sm font-semibold tracking-[0.2em] text-stone-50">
                      {step.number}
                    </div>

                    <div className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-stone-950">{step.title}</h3>
                        <p className="max-w-2xl text-base leading-7 text-stone-700">
                          {step.description}
                        </p>
                      </div>

                      {step.bullets.length > 0 ? (
                        <ul className="space-y-2">
                          {step.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm leading-6 text-stone-700"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {"image" in step && step.image ? (
                        <figure className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-[#f3ece4]">
                          <Image
                            src={step.image.src}
                            alt={step.image.alt}
                            width={1280}
                            height={751}
                            className="h-auto w-full object-cover"
                            priority={step.number === "01"}
                          />
                          <figcaption className="border-t border-stone-200 px-4 py-3 text-sm leading-6 text-stone-600">
                            {step.image.caption}
                          </figcaption>
                        </figure>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <section className="rounded-[2rem] border border-stone-200 bg-[#211e1a] p-6 text-stone-100 shadow-[0_18px_50px_rgba(75,54,32,0.12)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-400">Important note</p>
              <h2 className="mt-3 font-[family:var(--font-fraunces)] text-3xl text-white">
                If you only see <span className="rounded bg-white/10 px-2 py-1">{`{}`}</span>, stop and sign in again.
              </h2>
              <p className="mt-4 text-base leading-7 text-stone-300">
                The session page must show account session text. An empty object means the
                login session did not carry over into the browser tab correctly.
              </p>
            </section>

            <section className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-[0_18px_50px_rgba(75,54,32,0.08)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">FAQ</p>
              <div className="mt-5 space-y-4">
                {faqs.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[1.5rem] border border-stone-200 bg-[#fffdfa] p-5"
                  >
                    <h3 className="text-lg font-semibold text-stone-950">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-[2rem] border border-stone-200 bg-white/70 p-6 shadow-[0_18px_50px_rgba(75,54,32,0.06)] sm:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-500">Source</p>
              <p className="mt-3 text-base leading-7 text-stone-700">
                Instruction copy and screenshots were adapted from the original activation
                guide page, with marketplace branding and unrelated page content removed.
              </p>
              <a
                className="mt-4 inline-flex rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-800 transition-colors hover:bg-stone-950 hover:text-white"
                href="https://www.g2a.com/instruction/marketplace/293/chatgpt-code"
                target="_blank"
                rel="noreferrer"
              >
                View original source
              </a>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
}
