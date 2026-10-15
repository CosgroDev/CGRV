"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const links = [
  { href: "/projects", label: "Projects" },
  { href: "/toolbox", label: "Toolbox" },
  { href: "/blog", label: "Notes" },
  { href: "/about", label: "About" },
  { href: "/workspace", label: "Workspace" },
];
export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="wrap header-inner">
        <Link className="wordmark" href="/" aria-label="CGRV home">
          CGRV<span>↗</span>
        </Link>
        <span className="brand-caption">
          THE PERSONAL WORKSHOP
          <br />
          OF DALE COSGROVE
        </span>
        <button
          className="menu-toggle work-button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close ×" : "Menu +"}
        </button>
        <nav
          id="site-nav"
          aria-label="Main navigation"
          className={open ? "main-nav is-open" : "main-nav"}
        >
          {links.map((link) =>
            link.href === "/workspace" ? (
              <a key={link.href} href={link.href}>
                Workspace ↗
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname.startsWith(link.href) ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
                {link.href === "/workspace" ? (
                  <span aria-hidden="true"> ↗</span>
                ) : null}
              </Link>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
