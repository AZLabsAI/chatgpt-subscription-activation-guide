export const steps = [
  {
    number: '01',
    title: 'Open ChatGPT in a browser',
    description:
      'Use a desktop or mobile browser to open ChatGPT. Do not start this flow inside the mobile app.',
    bullets: ['A browser session is required for the activation flow to work correctly.'],
    image: {
      src: '/guide/step-1-login.webp',
      alt: 'ChatGPT browser screen with the login button highlighted',
      caption: 'Start on the browser version of ChatGPT and choose Log in.',
    },
  },
  {
    number: '02',
    title: 'Sign in to your account',
    description:
      'Log in with the account that should receive the subscription. If prompted, complete the standard sign-in flow first.',
    bullets: ['If a sign-in modal appears, continue through it before moving to the next step.'],
    image: {
      src: '/guide/step-1-login-modal.webp',
      alt: 'ChatGPT login modal with sign-in options',
      caption: 'Complete the sign-in prompt until your browser session is active.',
    },
  },
  {
    number: '03',
    title: 'Open the session page',
    description:
      'After you are signed in, open the session endpoint directly in the same browser session.',
    bullets: ['Use this exact URL: https://chatgpt.com/api/auth/session'],
    image: {
      src: '/guide/step-2-session.webp',
      alt: 'Browser tab showing the ChatGPT session page with account session data',
      caption: 'The session page should display account session text when you are logged in correctly.',
    },
  },
  {
    number: '04',
    title: 'Copy everything shown on the page',
    description:
      'Once the session page loads, copy the full text visible on screen. It should be the complete session output, not a partial selection.',
    bullets: ['If the page shows only `{}`, you are not logged in properly and need to sign in again.'],
  },
  {
    number: '05',
    title: 'Paste the copied text into the seller form',
    description:
      'After purchase, paste the copied session text into the form provided for activation.',
    bullets: ['Submit exactly what was copied from the session page.'],
  },
  {
    number: '06',
    title: 'Wait for activation to complete',
    description:
      'The subscription should activate automatically in about one minute after the session text is submitted.',
    bullets: ['For extra safety, you can log out of all devices after activation is complete.'],
  },
] as const;

export const faqs = [
  {
    question: 'What if the session page only shows {}?',
    answer:
      'That usually means the browser session is not signed in correctly. Return to ChatGPT, log in again, and reopen the session link.',
  },
  {
    question: 'How long does activation usually take?',
    answer:
      'The original guide says the process is automatic and typically completes within about one minute after submission.',
  },
  {
    question: 'Should this be done in the mobile app?',
    answer:
      'No. The activation flow should be completed in a browser, even if you are on a phone.',
  },
] as const;

export const preparationChecklist = [
  'Use the same browser session from login through to the session page.',
  'Make sure you are signed in to the correct ChatGPT account before copying anything.',
  'Copy the entire session output exactly as shown, not a shortened or edited version.',
];
