import type { Metadata } from "next";
import { Roboto, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ChatGPT Subscription Activation Guide",
  description:
    "A Matrix-themed activation guide for completing ChatGPT subscription activation in a browser.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${shareTechMono.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
