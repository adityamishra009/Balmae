"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#f2f3fb]">
      <div className="max-w-7xl mx-auto px-6 py-[90px] grid grid-cols-2 items-center gap-10">

        {/* LEFT */}
        <div className="max-w-xl">

          {/* HEADING */}
          <h1 className="text-[56px] leading-[1.1] font-extrabold text-[#1a2050]">
            Learn.{" "}
            <span className="text-[#f5a623]">Shop.</span>
            <br />
            Grow with BALMAE.
          </h1>

          {/* TEXT */}
          <p className="mt-6 text-[16px] text-[#6b7280] leading-relaxed">
            One platform for quality education, expert guidance,
            and cool products for every student.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex gap-4">
            <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#3c2fb0] text-white text-[14px] font-medium">
              Start Learning <ArrowRight size={16} />
            </button>

            <button className="flex items-center gap-2 px-7 py-3 rounded-full bg-[#f5a623] text-white text-[14px] font-medium">
              Explore Shop <ArrowRight size={16} />
            </button>
          </div>

          {/* DIVIDER */}
          <div className="mt-10 w-[420px] border-t border-gray-200"></div>

          {/* TRUST */}
          <div className="mt-6 flex gap-12 text-[13px] text-gray-600">
            <div>
              <p className="font-semibold text-[#1a2050]">Trusted by</p>
              <p>10K+ Students</p>
            </div>

            <div>
              <p className="font-semibold text-[#1a2050]">Premium</p>
              <p>Study Material</p>
            </div>

            <div>
              <p className="font-semibold text-[#1a2050]">Fast Delivery</p>
              <p>Pan India</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-end">
          <img
            src="/hero.png"  // 👉 apni image yahan daal (IMPORTANT)
            alt="hero"
            className="w-[560px] object-contain"
          />
        </div>

      </div>
    </section>
  );
}