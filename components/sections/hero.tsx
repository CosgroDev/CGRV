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
        className="flex items-center justify-between gap-3 mb-10 text-xs font-medium text-[#888888] uppercase tracking-widest"
        style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
      >
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1px] bg-[#e0e0e0] inline-block" />
          <span>Quality · Food Safety · Supply Chain</span>
        </div>
        <div className="w-[96px] h-[96px] rounded-full overflow-hidden border border-[#e0e0e0] shrink-0">
          <Image
            src="/A178F8E3-B240-4451-A130-1748FF5A6504.png"
            alt="Dale Cosgrove"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>

      {/* Main headline */}
      <div
        className="leading-none tracking-tighter mb-10"
        style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
      >
        <div className="text-[clamp(4rem,12vw,8rem)] font-black text-[#111111]">
          DALE
        </div>
        <div className="text-[clamp(4rem,12vw,8rem)] font-black text-[#1e4d2b]">
          COSGROVE
        </div>
      </div>

      {/* Typing tagline */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-7 bg-[#1e4d2b] shrink-0" />
        <p
          className="text-xl sm:text-2xl font-semibold text-[#111111] min-h-[1.75rem]"
          style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
        >
          {displayText}
          <span className="cursor-blink ml-0.5 text-[#1e4d2b]">|</span>
        </p>
      </div>

      {/* Meta row */}
      <div
        className="flex flex-wrap gap-6 mb-10 text-sm text-[#888888]"
        style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
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
      <div className="border-t border-b border-[#e0e0e0] py-5 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Years Experience", value: `${yearsFrom(CAREER_START)}+` },
          { label: "Industry", value: "Food Mfg" },
          { label: "Current Role", value: "Q&P Mgr" },
          { label: "Power Platform", value: `${yearsFrom(POWER_PLATFORM_START)} yrs` },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div
              className="text-3xl font-black text-[#1e4d2b] leading-none mb-1"
              style={{ fontFamily: '"Aspekta", "Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs text-[#888888] uppercase tracking-wide"
              style={{ fontFamily: '"Plus Jakarta Sans", Arial, sans-serif' }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
