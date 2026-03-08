import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@/components/google-analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://cgrv.co.uk"),
  title: "Dale Cosgrove | Food Safety Professional & Tech Enthusiast",
  description:
    "Portfolio of Dale Cosgrove, Food Safety Professional and Tech Enthusiast. Projects & Performance specialist at FBC UK with a passion for technology, data, and innovation.",
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
    title: "Dale Cosgrove | Food Safety Professional & Tech Enthusiast",
    description:
      "Food Safety Professional turned data-driven tech enthusiast. Projects & Performance specialist at FBC UK. Explore the portfolio.",
    type: "website",
    url: "https://cgrv.co.uk",
    siteName: "Dale Cosgrove",
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
    title: "Dale Cosgrove | Food Safety Professional & Tech Enthusiast",
    description:
      "Food Safety Professional turned data-driven tech enthusiast. Projects & Performance specialist at FBC UK. Explore the portfolio.",
    images: ["https://cgrv.co.uk/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="min-h-screen flex flex-col bg-[#F6F4EF]">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
