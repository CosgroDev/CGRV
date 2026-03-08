import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Dale Cosgrove | Food Safety Professional & Tech Enthusiast",
  description:
    "Portfolio of Dale Cosgrove — Food Safety Professional & Tech Enthusiast. Projects & Performance specialist at FBC UK with a passion for technology, data, and innovation.",
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
      "Food Safety Professional turned data-driven tech enthusiast. Projects & Performance specialist at FBC UK.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scanlines pixel-grid-bg min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
