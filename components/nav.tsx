"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/#about", label: "ABOUT" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "BLOG" },
  { href: "/#contact", label: "CONTACT" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b-2 border-[#22c55e]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-[#22c55e] text-[10px] hover:text-[#fbbf24] transition-colors leading-none"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          DC<span className="text-[#fbbf24]">.exe</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[8px] transition-colors hover:text-[#22c55e]",
                pathname === link.href
                  ? "text-[#22c55e] border-b-2 border-[#22c55e] pb-1"
                  : "text-[#888888]"
              )}
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#22c55e] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-[#333333] bg-[#0a0a0a]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-4 py-3 text-[8px] border-b border-[#1a1a1a] transition-colors hover:text-[#22c55e] hover:bg-[#111111]",
                pathname === link.href ? "text-[#22c55e]" : "text-[#888888]"
              )}
              style={{ fontFamily: '"Press Start 2P", monospace' }}
            >
              &gt; {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
