"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const TYPING_STRINGS = [
  "FOOD SAFETY PROFESSIONAL",
  "DATA ANALYST",
  "TECH ENTHUSIAST",
  "PROJECT MANAGER",
  "PROCESS INNOVATOR",
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentString = TYPING_STRINGS[stringIndex];
    const typingSpeed = deleting ? 60 : 100;
    const pauseTime = deleting ? 100 : 1800;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentString.length) {
          setDisplayText(currentString.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(currentString.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setDeleting(false);
          setStringIndex((s) => (s + 1) % TYPING_STRINGS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, stringIndex]);

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden">
      {/* Decorative pixel corners */}
      <div className="absolute top-8 left-8 w-8 h-8 border-t-4 border-l-4 border-[#22c55e] opacity-60" />
      <div className="absolute top-8 right-8 w-8 h-8 border-t-4 border-r-4 border-[#22c55e] opacity-60" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-b-4 border-l-4 border-[#22c55e] opacity-60" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-b-4 border-r-4 border-[#22c55e] opacity-60" />

      {/* Pixel avatar placeholder */}
      <div className="float-anim mb-8 relative">
        <div className="w-24 h-24 border-4 border-[#22c55e] shadow-[8px_8px_0_#22c55e] bg-[#111111] flex items-center justify-center relative overflow-hidden">
          <div className="text-4xl select-none">👾</div>
        </div>
        <div
          className="absolute -top-2 -right-2 text-[#fbbf24] text-[8px]"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          LVL 10
        </div>
      </div>

      {/* Name */}
      <h1
        className="text-[#f0f0f0] text-xl sm:text-2xl md:text-3xl mb-3 leading-relaxed"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        DALE{" "}
        <span className="text-[#22c55e] text-glow">COSGROVE</span>
      </h1>

      {/* Typing tagline */}
      <div
        className="text-[#fbbf24] text-[10px] sm:text-xs mb-8 min-h-[2rem] flex items-center gap-1"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        <span className="text-[#888888]">&gt;</span>{" "}
        <span>{displayText}</span>
        <span className="text-[#22c55e] animate-pulse">█</span>
      </div>

      {/* Stats bar — game character style */}
      <div className="border-2 border-[#333333] bg-[#111111] px-6 py-4 mb-10 max-w-md w-full shadow-[4px_4px_0_#333333]">
        <div
          className="text-[#888888] text-[8px] mb-3 text-left"
          style={{ fontFamily: '"Press Start 2P", monospace' }}
        >
          PLAYER STATS
        </div>
        <div className="space-y-2">
          {[
            { label: "FOOD SAFETY", value: "██████████", color: "#22c55e" },
            { label: "TECH", value: "████████░░", color: "#22c55e" },
            { label: "DATA", value: "███████░░░", color: "#fbbf24" },
            { label: "INNOVATION", value: "█████████░", color: "#fbbf24" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span
                className="text-[#888888] text-[7px] w-24 shrink-0 text-left"
                style={{ fontFamily: '"Press Start 2P", monospace' }}
              >
                {stat.label}
              </span>
              <span
                className="text-[8px] tracking-tight"
                style={{ color: stat.color, fontFamily: '"Press Start 2P", monospace' }}
              >
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/cv">
          <Button variant="primary" size="md">
            VIEW CV
          </Button>
        </Link>
        <Link href="/#projects">
          <Button variant="secondary" size="md">
            MY PROJECTS
          </Button>
        </Link>
        <Link href="/#contact">
          <Button variant="ghost" size="md">
            CONTACT
          </Button>
        </Link>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#444444] text-[7px] animate-bounce"
        style={{ fontFamily: '"Press Start 2P", monospace' }}
      >
        ▼ SCROLL ▼
      </div>
    </section>
  );
}
