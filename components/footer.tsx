import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e0e0e0] bg-white py-10 px-4 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-bold text-xl leading-none mb-1 text-[#111111]"
              style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
            >
              Dale <span className="text-[#1e4d2b]">Cosgrove</span>
            </p>
            <p className="text-sm text-[#888888]" style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}>
              © {year} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:dale@cgrv.co.uk"
              className="flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-[#1e4d2b] transition-colors border border-[#e0e0e0] px-4 py-2 rounded-sm hover:border-[#1e4d2b]"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
              aria-label="Email"
            >
              <Mail size={14} />
              <span>Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dale-cosgrove-738a18a4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#888888] hover:text-[#1e4d2b] transition-colors border border-[#e0e0e0] px-4 py-2 rounded-sm hover:border-[#1e4d2b]"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#e0e0e0] text-center text-xs text-[#888888] uppercase tracking-widest"
          style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}>
          Built with Next.js
        </div>
      </div>
    </footer>
  );
}
