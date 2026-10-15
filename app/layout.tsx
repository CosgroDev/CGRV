import type { Metadata } from "next";
import "./globals.css";
import { SiteFrame } from "@/components/site-frame";

export const metadata: Metadata = {
  metadataBase: new URL("https://cgrv.co.uk"),
  title: "CGRV | Dale Cosgrove’s Personal Workshop",
  description:
    "The personal workshop of Dale Cosgrove. Food safety, quality, data, practical tools and curious experiments.",
  keywords: [
    "Dale Cosgrove",
    "Food Safety",
    "Technology",
    "Data Analysis",
    "HACCP",
    "Portfolio",
    "FBC UK",
  ],
  authors: [{ name: "Dale Cosgrove" }],
  openGraph: {
    title: "CGRV | Dale Cosgrove’s Personal Workshop",
    description:
      "Food safety, quality, useful tools and curious experiments from Dale Cosgrove’s personal workshop.",
    type: "website",
    url: "https://cgrv.co.uk",
    siteName: "CGRV",
    images: [
      {
        url: "https://cgrv.co.uk/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Dale Cosgrove — Food Safety Professional & Tech Enthusiast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CGRV | Dale Cosgrove’s Personal Workshop",
    description:
      "Food safety, quality, useful tools and curious experiments from Dale Cosgrove’s personal workshop.",
    images: ["https://cgrv.co.uk/opengraph-image"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dale Cosgrove",
  url: "https://cgrv.co.uk",
  jobTitle: "Projects & Performance Specialist",
  worksFor: {
    "@type": "Organization",
    name: "FBC UK",
  },
  sameAs: ["https://www.linkedin.com/in/dale-cosgrove-738a18a4"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
