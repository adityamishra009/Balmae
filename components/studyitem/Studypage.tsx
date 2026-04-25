"use client";
import { useState } from "react";
import ExamSelector from "@/components/studyitem/EXamSelector";
import Tabs from "@/components/studyitem/Tabs";
import Notes from "@/components/studyitem/Notes";
import PYQ from "@/components/studyitem/Pyq";
import Mock from "@/components/studyitem/Mock";

const examsData = [
  { id: "cuet", name: "CUET" },
  { id: "jee", name: "JEE" },
];

export default function StudyPage() {
  const [activeExam, setActiveExam] = useState("cuet");
  const [activeTab, setActiveTab] = useState("notes");

  return (
    <div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",          // ⭐ center page
    padding: "40px 20px",
    textAlign: "center",       // ⭐ text भी center
  }}
>
      
      {/* EXAM SELECTOR */}
      <ExamSelector
        exams={examsData}
        activeExam={activeExam}
        setActiveExam={setActiveExam}
      />

      {/* TABS */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* CONTENT */}
      <div style={{ marginTop: "30px", }}>
        {activeTab === "notes" && <Notes exam={activeExam} />}
        {activeTab === "pyq" && <PYQ exam={activeExam} />}
        {activeTab === "mock" && <Mock exam={activeExam} />}
      </div>
    </div>
  );
}