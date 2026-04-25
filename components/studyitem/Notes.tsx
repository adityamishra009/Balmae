"use client";
import { useEffect, useState } from "react";

type Note = {
  title: string;
  size: string;
  subject: string;
};

export default function Notes({ exam = "cuet" }: { exam?: string }) {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    setNotes([
      { title: "Physics Notes", size: "2MB", subject: "Physics" },
      { title: "Chemistry Notes", size: "1.5MB", subject: "Chemistry" },
      { title: "Maths Notes", size: "3MB", subject: "Maths" },
    ]);
  }, [exam]);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" ,justifyContent: "center"}}>
      {notes.map((note) => (
        <div
          key={note.title}
          style={{
            width: "240px",
            padding: "18px",
            borderRadius: "14px",
            background: "#fff",
            border: "1px solid #eee",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
            justifyContent: "center"
          }}
        >
          <div style={{ fontSize: "28px" }}>📘</div>

          <h4 style={{ margin: "10px 0 5px" }}>{note.title}</h4>

          <p style={{ fontSize: "13px", color: "#666" }}>
            {note.subject} • {note.size}
          </p>

          <button
            style={{
              marginTop: "12px",
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#5b4bff",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
}