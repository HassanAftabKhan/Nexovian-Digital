import type { Metadata } from "next";
import "./globals.css";

/* ============================================
   ROOT LAYOUT — NexovianDigital
   SEO-optimized metadata + global providers
   ============================================ */

export const metadata: Metadata = {
  title: {
    default: "NexovianDigital | AI-Powered Digital Agency",
    template: "%s | NexovianDigital",
  },
  description:
    "Elite AI-powered digital agency specializing in web development, SEO, AI automation, and data analytics. We engineer intelligent digital ecosystems for high-growth companies.",
  keywords: [
    "AI agency",
    "web development",
    "SEO services",
    "AI automation",
    "Power BI dashboards",
    "digital agency",
    "SaaS development",
    "AI chatbots",
    "enterprise web development",
  ],
  authors: [{ name: "NexovianDigital" }],
  creator: "NexovianDigital",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexoviandigital.agency",
    siteName: "NexovianDigital",
    title: "NexovianDigital | AI-Powered Digital Agency",
    description:
      "We engineer intelligent digital ecosystems. Web Development, SEO, AI Automation & Data Analytics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexovianDigital | AI-Powered Digital Agency",
    description:
      "We engineer intelligent digital ecosystems. Web Development, SEO, AI Automation & Data Analytics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
