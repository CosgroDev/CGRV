"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Nav } from "./nav";
import { Footer } from "./footer";
import { GoogleAnalytics } from "./google-analytics";

export function SiteFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const privateRoute =
    pathname.startsWith("/workspace") || pathname.startsWith("/auth/");
  return (
    <>
      {privateRoute ? (
        <header className="site-header">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <div className="wrap header-inner">
            <Link className="wordmark" href="/">
              CGRV<span>↗</span>
            </Link>
            <span className="brand-caption">
              THE PERSONAL WORKSHOP
              <br />
              PRIVATE WORKBENCH
            </span>
            <Link className="text-link" href="/" style={{ marginLeft: "auto" }}>
              Public website ↗
            </Link>
          </div>
        </header>
      ) : (
        <>
          <GoogleAnalytics />
          <Nav />
        </>
      )}
      <main id="main" className="flex-1">
        {children}
      </main>
      {privateRoute ? null : <Footer />}
    </>
  );
}
