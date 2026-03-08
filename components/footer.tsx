import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#1C1C1A] bg-[#F6F4EF] py-10 px-4 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p
              className="font-bold text-xl leading-none mb-1"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              Dale <span className="text-[#22c55e]">Cosgrove</span>
            </p>
            <p className="text-sm text-[#7A7870]">
              © {year} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:dale@cgrv.co.uk"
              className="flex items-center gap-2 text-sm font-medium text-[#7A7870] hover:text-[#22c55e] transition-colors border-2 border-[#1C1C1A] px-4 py-2 hover:border-[#22c55e]"
              aria-label="Email"
            >
              <Mail size={14} />
              <span>Email</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/dale-cosgrove-738a18a4"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#7A7870] hover:text-[#22c55e] transition-colors border-2 border-[#1C1C1A] px-4 py-2 hover:border-[#22c55e]"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#D5D1C9] text-center text-xs text-[#7A7870] uppercase tracking-widest">
          Built with Next.js
        </div>
      </div>
    </footer>
  );
}
