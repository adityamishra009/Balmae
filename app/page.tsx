"use client";

import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Hero />
    </main>
  );
}