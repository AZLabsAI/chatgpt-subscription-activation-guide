import type { Metadata } from 'next';

export const SITE_NAME = 'AZ Labs';
export const SITE_TITLE = 'ChatGPT Subscription Activation Guide';
export const SITE_DESCRIPTION =
  'A clear, step-by-step guide for completing ChatGPT subscription activation in a browser.';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://chatgpt-subscription-activation-gui.vercel.app';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${SITE_TITLE} | ${SITE_NAME}`,
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'article',
    title: `${SITE_TITLE} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_TITLE} | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
  },
};

export function buildRobotsTxt() {
  return ['User-agent: *', 'Allow: /', '', `Sitemap: ${SITE_URL}/sitemap.xml`].join('\n');
}

export function buildSitemapXml() {
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${SITE_URL}</loc><changefreq>monthly</changefreq><priority>0.8</priority></url></urlset>`;
}

export function buildFaqSchema(items: readonly { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildHowToSchema(
  steps: readonly { title: string; description: string; bullets: readonly string[] }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: SITE_TITLE,
    description: SITE_DESCRIPTION,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.title,
      text: [step.description, ...step.bullets].join(' '),
    })),
  };
}
