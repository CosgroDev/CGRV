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
    <nav className="sticky top-0 z-50 bg-[#F6F4EF] border-b-2 border-[#1C1C1A]">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-bold text-xl leading-none tracking-tight hover:text-[#22c55e] transition-colors"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          Dale <span className="text-[#22c55e]">Cosgrove</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium uppercase tracking-widest transition-colors hover:text-[#22c55e]",
                pathname === link.href
                  ? "text-[#1C1C1A] border-b-2 border-[#22c55e] pb-0.5"
                  : "text-[#7A7870]"
              )}
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#1C1C1A] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-[#1C1C1A] bg-[#F6F4EF]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "block px-6 py-4 text-sm font-medium uppercase tracking-widest border-b border-[#D5D1C9] transition-colors hover:text-[#22c55e] hover:bg-white",
                pathname === link.href ? "text-[#22c55e]" : "text-[#7A7870]"
              )}
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
