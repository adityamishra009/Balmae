"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      style={{
        background: "#f0f1fb",
        minHeight: "calc(100vh - 60px)",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ORBS */}
      <div style={{
        position: "absolute", width: 320, height: 320, borderRadius: "50%",
        background: "#d8d4f8", opacity: 0.6,
        top: -80, right: 60, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", width: 160, height: 160, borderRadius: "50%",
        background: "#f0b8c0", opacity: 0.5,
        top: "38%", left: "43%", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", width: 180, height: 180, borderRadius: "50%",
        background: "#d8d4f8", opacity: 0.5,
        bottom: -40, right: -20, pointerEvents: "none"
      }} />

      {/* MOBILE & TABLET — stack layout */}
      <div className="flex flex-col items-center px-6 pt-10 pb-12 md:hidden">

        {/* IMAGE TOP */}
        <div style={{ width: "100%", maxWidth: 340 }}>
          <Image
            src="/imagehero.png"
            alt="BALMAE Hero"
            width={340}
            height={340}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
            priority
          />
        </div>

        {/* TEXT */}
        <h1 style={{
          fontSize: "clamp(32px, 8vw, 48px)",
          fontWeight: 900,
          lineHeight: 1.1,
          color: "#1a2050",
          marginBottom: 16,
          textAlign: "center",
        }}>
          Learn. <span style={{ color: "#f5a623" }}>Shop.</span>
          <br />
          Grow with{" "}
          <span style={{ color: "#1a2050" }}>BAL</span><span style={{ color: "#f5a623" }}>MAE.</span>
        </h1>

        <p style={{
          fontSize: 15, color: "#6b7280", lineHeight: 1.7,
          marginBottom: 28, textAlign: "center", maxWidth: 400,
        }}>
          One platform for quality education, expert guidance,
          and cool products for every student.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/study" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#3c2fb0", color: "#fff",
            padding: "14px 24px", borderRadius: 12,
            fontSize: 14, fontWeight: 700, textDecoration: "none",
          }}>
            Start Learning <ArrowRight size={16} />
          </Link>
          <Link href="/shop" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "#f5a623", color: "#fff",
            padding: "14px 24px", borderRadius: 12,
            fontSize: 14, fontWeight: 700, textDecoration: "none",
          }}>
            Explore Shop <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ width: "100%", maxWidth: 400, height: 1, background: "#e5e7eb", marginBottom: 24 }} />

        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { icon: "👥", label: "Trusted by", value: "10K+ Students" },
            { icon: "📚", label: "Premium", value: "Study Material" },
            { icon: "🚚", label: "Fast Delivery", value: "Pan India" },
          ].map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 12, color: "#1a2050" }}>{item.label}</div>
                <div style={{ fontSize: 12, color: "#6b7280" }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP — grid layout */}
      <div
        className="hidden md:grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 48px",
          height: "calc(100vh - 60px)",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: 40,
        }}
      >
        {/* LEFT */}
        <div style={{ display: "flex", flexDirection: "column" }}>

          <h1 style={{
            fontSize: "clamp(40px, 5vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            color: "#1a2050",
            marginBottom: 20,
          }}>
            Learn. <span style={{ color: "#f5a623" }}>Shop.</span>
            <br />
            Grow with{" "}
            <span style={{ color: "#1a2050" }}>BAL</span><span style={{ color: "#f5a623" }}>MAE.</span>
          </h1>

          <p style={{
            fontSize: 16, color: "#6b7280", lineHeight: 1.7,
            marginBottom: 36, maxWidth: 440,
          }}>
            One platform for quality education, expert guidance,
            and cool products for every student.
          </p>

          <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap" }}>
            <Link href="/study" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#3c2fb0", color: "#fff",
              padding: "16px 32px", borderRadius: 12,
              fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}>
              Start Learning <ArrowRight size={18} />
            </Link>
            <Link href="/shop" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#f5a623", color: "#fff",
              padding: "16px 32px", borderRadius: 12,
              fontSize: 15, fontWeight: 700, textDecoration: "none",
            }}>
              Explore Shop <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ width: "100%", maxWidth: 440, height: 1, background: "#e5e7eb", marginBottom: 28 }} />

          <div style={{ display: "flex", gap: 36, flexWrap: "wrap" }}>
            {[
              { icon: "👥", label: "Trusted by", value: "10K+ Students" },
              { icon: "📚", label: "Premium", value: "Study Material" },
              { icon: "🚚", label: "Fast Delivery", value: "Pan India" },
            ].map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 13, color: "#1a2050" }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: "#6b7280" }}>{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: "100%",
        }}>
          <div style={{
            position: "relative",
            width: "110%",
            maxWidth: 640,
            aspectRatio: "1/1",
            alignSelf: "flex-start",
            marginTop: "-20px",
            marginRight: "-48px",
          }}>
            <Image
              src="/imagehero.png"
              alt="BALMAE Hero"
              width={640}
              height={640}
              style={{
                objectFit: "contain",
                objectPosition: "bottom right",
                width: "100%",
                height: "auto",
              }}
              priority
            />
          </div>
        </div>
      </div>

    </section>
  );
}