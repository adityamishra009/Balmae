"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Test = {
  id: string;
  title: string;
  duration: number;
  questions: number;
};

export default function Mock({ exam = "cuet" }: { exam?: string }) {
  const [tests, setTests] = useState<Test[]>([]);
  const router = useRouter();

  useEffect(() => {
    setTests([
      {
        id: "1",
        title: `${exam.toUpperCase()} Mock Test 1`,
        duration: 60,
        questions: 50,
      },
      {
        id: "2",
        title: `${exam.toUpperCase()} Mock Test 2`,
        duration: 45,
        questions: 40,
      },
    ]);
  }, [exam]);

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1100px", margin: "auto" }}>
      <h2 style={{ marginBottom: "20px" }}>{exam.toUpperCase()} Mock Tests</h2>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "center"}}>
        {tests.map((t) => (
          <div
            key={t.id}
            style={{
              width: "260px",
              padding: "18px",
              borderRadius: "14px",
              border: "1px solid #eee",
              boxShadow: "0 6px 14px rgba(0,0,0,0.05)",
              background: "#fff",
            }}
          >
            <h4>{t.title}</h4>
            <p>⏱ {t.duration} min</p>
            <p>📘 {t.questions} Questions</p>

            <button
              style={{
                marginTop: "12px",
                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                border: "none",
                background: "#5b4bff",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => router.push(`/mock/${t.id}`)}
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}