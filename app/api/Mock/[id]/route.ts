export async function GET(_: Request, { params }: any) {
  const { id } = params;

  // 🔥 अभी DB नहीं — dummy data
  const data = {
    id,
    questions: [
      {
        question: "2 + 2 = ?",
        options: ["1", "2", "3", "4"],
        correct: 3,
      },
      {
        question: "5 * 2 = ?",
        options: ["5", "10", "15", "20"],
        correct: 1,
      },
      {
        question: "Capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        correct: 1,
      },
    ],
  };

  return Response.json(data);
}