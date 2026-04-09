import type { Metadata } from 'next';
import { Fraunces, Public_Sans } from 'next/font/google';
import { defaultMetadata } from './lib/seo';
import './globals.css';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
});

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${publicSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
