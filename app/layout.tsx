import type { Metadata } from "next";
import { Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChatGPT Subscription Activation Guide",
  description:
    "An AZLabs.ai-inspired activation guide for completing ChatGPT subscription activation in a browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansFlex.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
