export default function ExamSelector({
  exams,
  activeExam,
  setActiveExam,
}: any) {
  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ marginBottom: "15px" }}>Choose Your Exam</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        {exams.map((exam: any) => (
          <div
            key={exam.id}
            onClick={() => setActiveExam(exam.id)}
            style={{
              padding: "15px 25px",
              borderRadius: "10px",
              cursor: "pointer",
              border:
                activeExam === exam.id
                  ? "2px solid #5b4bff"
                  : "1px solid #ddd",
              background:
                activeExam === exam.id ? "#f0edff" : "#fff",
            }}
          >
            {exam.name}
          </div>
        ))}
      </div>
    </div>
  );
}