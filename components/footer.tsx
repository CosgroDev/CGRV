import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[#333333] bg-[#0a0a0a] py-8 px-4 mt-16">
      <div className="max-w-5xl mx-auto">
        <div className="pixel-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div
            className="text-[#888888] text-[8px] leading-relaxed"
            style={{ fontFamily: '"Press Start 2P", monospace' }}
          >
            <p className="text-[#22c55e] mb-2">DALE COSGROVE</p>
            <p>© {year} ALL RIGHTS RESERVED</p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="mailto:your@email.com"
              className="flex items-center gap-2 text-[#888888] hover:text-[#22c55e] transition-colors border-2 border-[#333333] px-3 py-2 hover:border-[#22c55e] text-[8px]"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
              aria-label="Email"
            >
              <Mail size={14} />
              <span className="hidden sm:inline">EMAIL</span>
            </Link>
            <Link
              href="https://linkedin.com/in/dale-cosgrove"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#888888] hover:text-[#22c55e] transition-colors border-2 border-[#333333] px-3 py-2 hover:border-[#22c55e] text-[8px]"
              style={{ fontFamily: '"Press Start 2P", monospace' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LINKEDIN</span>
            </Link>
          </div>
        </div>

        <div
          className="text-center mt-8 text-[#444444] text-[7px]"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          BUILT WITH NEXT.JS + 8BIT STYLE ▮
        </div>
      </div>
    </footer>
  );
}
