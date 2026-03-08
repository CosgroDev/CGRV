"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapPin, Briefcase } from "lucide-react";
import Image from "next/image";
import { yearsFrom } from "@/lib/dates";

const CAREER_START = new Date(2011, 4, 1);       // May 2011 — Yorkshire Premier Meat
const POWER_PLATFORM_START = new Date(2020, 2, 1); // March 2020

const ROLES = [
  "Food Safety Professional",
  "Data Analyst",
  "Tech Enthusiast",
  "Project Manager",
  "Process Innovator",
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 50 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex]);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center px-4 py-16 max-w-5xl mx-auto">
      {/* Label strip */}
      <div
        className="flex items-center justify-between gap-3 mb-10 text-xs font-medium text-[#7A7870] uppercase tracking-widest"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-[2px] bg-[#1C1C1A] inline-block" />
          <span>Quality · Food Safety · Supply Chain</span>
        </div>
        <div className="w-[96px] h-[96px] rounded-full overflow-hidden border-2 border-[#1C1C1A] shrink-0">
          <Image
            src="/avatar.png"
            alt="Dale Cosgrove"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Main headline — mixed colour editorial treatment */}
      <div
        className="leading-none tracking-tighter mb-10"
        style={{ fontFamily: '"Syne", sans-serif' }}
      >
        <div className="text-[clamp(4rem,12vw,8rem)] font-black text-[#1C1C1A]">
          DALE
        </div>
        <div className="text-[clamp(4rem,12vw,8rem)] font-black">
          <span className="text-[#22c55e]">C</span>
          <span className="text-[#E63946]">O</span>
          <span className="text-[#1C1C1A]">S</span>
          <span className="text-[#2E3A8C]">G</span>
          <span className="text-[#1C1C1A]">R</span>
          <span className="text-[#F59E0B]">O</span>
          <span className="text-[#1C1C1A]">V</span>
          <span className="text-[#22c55e]">E</span>
        </div>
      </div>

      {/* Typing tagline */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-7 bg-[#22c55e] shrink-0" />
        <p
          className="text-xl sm:text-2xl font-semibold text-[#1C1C1A] min-h-[1.75rem]"
          style={{ fontFamily: '"Syne", sans-serif' }}
        >
          {displayText}
          <span className="cursor-blink ml-0.5 text-[#22c55e]">|</span>
        </p>
      </div>

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-6 mb-10 text-sm text-[#7A7870]"
        style={{ fontFamily: '"DM Sans", sans-serif' }}
      >
        <div className="flex items-center gap-2">
          <Briefcase size={14} />
          <span>Quality Performance &amp; Projects Manager · FBC UK</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} />
          <span>Barnsley, South Yorkshire, UK</span>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-3 mb-16">
        <Link href="/cv">
          <Button variant="primary" size="md">View CV</Button>
        </Link>
        <Link href="/#projects">
          <Button variant="secondary" size="md">My Projects</Button>
        </Link>
        <Link href="/#contact">
          <Button variant="ghost" size="md">Contact</Button>
        </Link>
      </div>

      {/* Stats strip */}
      <div className="border-t-2 border-b-2 border-[#1C1C1A] py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Years Experience", value: `${yearsFrom(CAREER_START)}+` },
          { label: "Industry", value: "Food Mfg" },
          { label: "Current Role", value: "Q&P Mgr" },
          { label: "Power Platform", value: `${yearsFrom(POWER_PLATFORM_START)} yrs` },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-3xl font-black text-[#22c55e] leading-none mb-1"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs text-[#7A7870] uppercase tracking-wide"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
