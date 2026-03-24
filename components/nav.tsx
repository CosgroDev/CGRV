"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/cv", label: "CV" },
  { href: "/blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[#e0e0e0]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl leading-none tracking-tight text-[#111111] hover:text-[#1e4d2b] transition-colors"
          style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
        >
          Dale <span className="text-[#1e4d2b]">Cosgrove</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-[#1e4d2b]",
                pathname === link.href
                  ? "text-[#1e4d2b] border-b-2 border-[#1e4d2b] pb-0.5"
                  : "text-[#888888]"
              )}
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#111111] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#e0e0e0] bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-4 text-sm font-medium uppercase tracking-widest border-b border-[#e0e0e0] transition-colors hover:text-[#1e4d2b] hover:bg-[#f4f4f4]",
                pathname === link.href ? "text-[#1e4d2b]" : "text-[#888888]"
              )}
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
