"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function QuizPage() {
  const { id } = useParams();

  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState<number | null>(null);

  // 🔷 API से data लाना
  useEffect(() => {
    fetch(`/api/mock/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.questions);
        setAnswers(Array(data.questions.length).fill(null));
      });
  }, [id]);

  // 🔷 option select
  const selectOption = (i: number) => {
    const copy = [...answers];
    copy[current] = i;
    setAnswers(copy);
  };

  // 🔷 submit
  const submit = () => {
    let s = 0;
    answers.forEach((ans, i) => {
      if (ans === questions[i].correct) s++;
    });
    setScore(s);
  };

  if (questions.length === 0) {
    return <div style={{ padding: "40px" }}>Loading...</div>;
  }

  // 🔷 result
  if (score !== null) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Result</h2>
        <p>
          Score: {score} / {questions.length}
        </p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ padding: "40px", maxWidth: "700px", margin: "auto" }}>
      <h3>
        Question {current + 1} / {questions.length}
      </h3>

      <p style={{ margin: "20px 0" }}>{q.question}</p>

      {q.options.map((opt: string, i: number) => (
        <div
          key={i}
          onClick={() => selectOption(i)}
          style={{
            padding: "10px",
            marginBottom: "10px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            cursor: "pointer",
            background: answers[current] === i ? "#e0dcff" : "#fff",
          }}
        >
          {opt}
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setCurrent((p) => Math.max(p - 1, 0))}>
          Prev
        </button>

        <button
          onClick={() =>
            setCurrent((p) => Math.min(p + 1, questions.length - 1))
          }
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>

        <button onClick={submit} style={{ marginLeft: "10px" }}>
          Submit
        </button>
      </div>
    </div>
  );
}