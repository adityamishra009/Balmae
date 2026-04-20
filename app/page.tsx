"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import { ShoppingBagIcon, AcademicCapIcon } from "@heroicons/react/24/outline";

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
        char.style.transform = "translateY(0)";
      }, delay);
      delay += 45;
    });
  }, []);

  let charIndex = 0;

  return (
    <main className="min-h-screen  flex flex-col overflow-hidden">
      <Navbar />

      <section className="relative flex-1 flex flex-col items-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28">

        {/* Background Orbs */}
        <div className="absolute w-[260px] sm:w-[320px] h-[260px] sm:h-[320px] rounded-full bg-[#c5b8f8] blur-[60px] opacity-35 -top-20 -left-16 pointer-events-none" />
        <div className="absolute w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full bg-[#f8d8b0] blur-[60px] opacity-35 top-24 -right-16 pointer-events-none" />
        <div className="absolute w-[160px] sm:w-[200px] h-[160px] sm:h-[200px] rounded-full bg-[#b8d8f8] blur-[60px] opacity-35 -bottom-10 left-[40%] pointer-events-none" />

        {/* HERO TEXT */}
        <div className="text-center flex flex-col gap-3 sm:gap-4 max-w-2xl z-10">
          {[1, 2].map((line) => (
            <div key={line} className="flex justify-center gap-2 flex-wrap">
              {words
                .filter((w) => w.line === line)
                .map((word) =>
                  word.text.split("").map((char, ci) => {
                    const idx = charIndex++;
                    return (
                      <span
                        key={`${word.text}-${ci}`}
                        ref={(el) => { if (el) charsRef.current[idx] = el; }}
                        className={`inline-block font-heading font-black text-[clamp(32px,6vw,72px)] leading-[1.1] ${word.color}`}
                        style={{
                          opacity: 0,
                          transform: "translateY(-40px)",
                          transition: "all 0.5s ease",
                        }}
                      >
                        {char}
                      </span>
                    );
                  })
                )}
            </div>
          ))}

          <p
            className="text-muted text-xs sm:text-sm tracking-[0.18em] uppercase font-medium opacity-0"
            style={{ animation: "fadeUp 0.8s 1.6s ease forwards" }}
          >
            Your complete platform for success
          </p>
        </div>

        {/* GAP CONTROL */}
        <div className="h-6 sm:h-12 md:h-16" />

        {/* CARDS */}
        {/* CARDS */}
<div className="flex flex-col sm:flex-row gap-12 sm:gap-16 md:gap-20 justify-center items-center">

  {/* Study Card */}
  <Link
    href="/study"
    className="w-full max-w-[250px] h-[190px] rounded-2xl p-5 flex flex-col justify-between border border-white/15 relative overflow-hidden hover:-translate-y-2 transition"
    style={{ background: "linear-gradient(135deg,#1e2860,#2a3580)" }}
  >
    <div className="absolute w-[90px] h-[90px] bg-[#f5a623] blur-[40px] opacity-40 -bottom-4 -right-4" />

    {/* TOP */}
    <div>
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
        <AcademicCapIcon className="w-5 h-5 text-white" />
      </div>

      <div className="text-white font-bold text-base mb-1">
        Study Hub
      </div>

      <div className="text-white/60 text-xs">
        Notes, video lectures aur study material — sab ek jagah.
      </div>
    </div>

    {/* BUTTON */}
    <div className="mt-auto flex justify-center h-7 -translate-y-12">
      <span className="text-lg bg-primary text-white rounded-lg">
        Start Learning →
      </span>
    </div>
  </Link>

  {/* Shop Card */}
  <Link
    href="/shop"
    className="w-full max-w-[260px] h-[200px] rounded-2xl p-5 flex flex-col justify-between border border-white/15 relative overflow-hidden hover:-translate-y-2 transition"
    style={{ background: "linear-gradient(135deg,#2a1a60,#1e2860)" }}
  >
    <div className="absolute w-[90px] h-[90px] bg-[#f07800] blur-[40px] opacity-40 -bottom-4 -right-4" />

    {/* TOP */}
    <div>
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3">
        <ShoppingBagIcon className="w-5 h-5 text-white" />
      </div>

      <div className="text-white font-bold text-base mb-1">
        Shop Essentials
      </div>

      <div className="text-white/60 text-xs">
        Books, tools aur har zaroorat ki cheez — easy delivery.
      </div>
    </div>

    {/* BUTTON */}
    <div className="mt-auto flex justify-center h-7 -translate-y-12">
      <span className="text-lg bg-primary text-white rounded-lg" >
        Explore Shop →
      </span>
    </div>
  </Link>

</div>
      </section>
    </main>
  );
}