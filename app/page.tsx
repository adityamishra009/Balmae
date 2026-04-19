"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";

const words = [
  { text: "Learn", color: "text-primary", line: 1 },
  { text: "&", color: "text-secondary", line: 1 },
  { text: "Shop", color: "text-primary", line: 1 },
  { text: "and", color: "text-secondary", line: 2 },
  { text: "Grow.", color: "text-primary", line: 2 },
];

export default function Home() {
  const charsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    let delay = 100;
    charsRef.current.forEach((char) => {
      if (!char) return;
      setTimeout(() => {
        char.style.opacity = "1";
        char.style.transform = "translateY(0) rotate(0deg)";
      }, delay);
      delay += 45;
    });
  }, []);

  let charIndex = 0;

  return (
    <main className="min-h-screen bg-background flex flex-col overflow-hidden">
      <Navbar />

      <section className="relative flex-1 flex flex-col items-center justify-start pt-24 px-6 overflow-hidden">

        {/* Orbs */}
        <div className="absolute w-[320px] h-[320px] rounded-full bg-[#c5b8f8] blur-[60px] opacity-35 -top-20 -left-16 pointer-events-none" style={{animation:'float1 8s ease-in-out infinite'}} />
        <div className="absolute w-[280px] h-[280px] rounded-full bg-[#f8d8b0] blur-[60px] opacity-35 top-24 -right-16 pointer-events-none" style={{animation:'float2 10s ease-in-out infinite'}} />
        <div className="absolute w-[200px] h-[200px] rounded-full bg-[#b8d8f8] blur-[60px] opacity-35 -bottom-10 left-[40%] pointer-events-none" style={{animation:'float3 7s ease-in-out infinite'}} />

        {/* Hero Text */}
        <div className="text-center relative z-10 flex flex-col gap-2 max-w-2xl">
          {[1, 2].map((line) => (
            <div key={line} className="flex items-center justify-center gap-2 flex-wrap">
              {words
                .filter((w) => w.line === line)
                .map((word) =>
                  word.text.split("").map((char, ci) => {
                    const idx = charIndex++;
                    return (
                      <span
                        key={`${word.text}-${ci}`}
                        ref={(el) => { if (el) charsRef.current[idx] = el; }}
                        className={`inline-block font-heading font-black text-[clamp(36px,6vw,72px)] leading-[1.1] ${word.color}`}
                        style={{
                          opacity: 0,
                          transform: "translateY(-50px) rotate(-8deg)",
                          transition:
                            "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                        }}
                      >
                        {char}
                      </span>
                    );
                  })
                )}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p
          className="mt-6 text-muted text-sm tracking-[0.18em] uppercase font-medium relative z-10 opacity-0"
          style={{ animation: "fadeUp 0.8s 1.6s ease forwards" }}
        >
          Your complete platform for success
        </p>

        {/* Cards */}
        <div
          className="mt-16 flex flex-col sm:flex-row gap-8 w-full max-w-xl justify-center items-stretch relative z-10 opacity-0"
          style={{ animation: "fadeUp 0.8s 1.8s ease forwards" }}
        >

          {/* Study Card */}
          <Link
            href="/study"
            className="w-full sm:w-[260px] h-[300px] rounded-2xl p-6 flex flex-col border border-white/15 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ background: "linear-gradient(135deg,#1e2860,#2a3580)" }}
          >
            <div className="absolute w-[100px] h-[100px] rounded-full bg-[#f5a623] blur-[40px] opacity-40 -bottom-4 -right-4 pointer-events-none" />

            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 mb-4">
              <svg className="w-5 h-5 stroke-white fill-none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M4 19V6a2 2 0 012-2h12a2 2 0 012 2v13"/>
                <rect x="8" y="2" width="8" height="4" rx="1"/>
                <path d="M9 12h6M9 15h4"/>
              </svg>
            </div>

            <div className="font-heading font-black text-lg text-white mb-2">Study Hub</div>
            <div className="text-xs text-white/65 leading-relaxed flex-1">
              Notes, video lectures aur study material — sab ek jagah.
            </div>

            <div className="mt-5">
              <span className="px-5 py-2.5 bg-white text-secondary font-semibold text-xs rounded-xl inline-block">
                Start Learning →
              </span>
            </div>
          </Link>

          {/* Shop Card */}
          <Link
            href="/shop"
            className="w-full sm:w-[260px] h-[300px] rounded-2xl p-6 flex flex-col border border-white/15 relative overflow-hidden transition-all duration-300 hover:-translate-y-2"
            style={{ background: "linear-gradient(135deg,#2a1a60,#1e2860)" }}
          >
            <div className="absolute w-[100px] h-[100px] rounded-full bg-[#f07800] blur-[40px] opacity-40 -bottom-4 -right-4 pointer-events-none" />

            <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 mb-4">
              <svg className="w-5 h-5 stroke-white fill-none" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>

            <div className="font-heading font-black text-lg text-white mb-2">Shop Essentials</div>
            <div className="text-xs text-white/65 leading-relaxed flex-1">
              Books, tools aur har zaroorat ki cheez — easy delivery.
            </div>

            <div className="mt-5">
              <span className="px-5 py-2.5 bg-white text-secondary font-semibold text-xs rounded-xl inline-block">
                Explore Shop →
              </span>
            </div>
          </Link>

        </div>
      </section>
    </main>
  );
}