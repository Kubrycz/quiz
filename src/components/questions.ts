import Questions from "../models/questions";

export async function questions(): Promise<Questions[]> {
  const baseUrl = "https://68c0430a0b196b9ce1c3ceb4.mockapi.io/";
  const res = await fetch(`${baseUrl}/Questions`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Błąd pobierania: ${res.status}`);
  }

  const data: Questions[] = await res.json();
  return data;
}
// export const sampleQuestions = {
//   matematyka: [
//     {
//       question: "Ile to 2 + 2?",
//       answers: ["3", "4", "5", "6"],
//       correct: "4",
//     },
//     {
//       question: "Pierwiastek z 16 to?",
//       answers: ["2", "3", "4", "5"],
//       correct: "4",
//     },
//     {
//       question: "Ile to 5 * 6?",
//       answers: ["28", "30", "32", "36"],
//       correct: "30",
//     },
//     {
//       question: "Jaki jest pierwiastek kwadratowy z 25?",
//       answers: ["3", "4", "5", "6"],
//       correct: "5",
//     },
//     {
//       question: "Ile to 12 * 8?",
//       answers: ["96", "86", "108", "112"],
//       correct: "96",
//     },
//     {
//       question: "Ile wynosi π?",
//       answers: ["3.12", "3.14", "3.16", "3.18"],
//       correct: "3.14",
//     },
//     {
//       question: "Ile to pierwiastek z 81?",
//       answers: ["7", "8", "9", "10"],
//       correct: "9",
//     },
//     {
//       question: "Ile wynosi suma kątów w trójkącie?",
//       answers: ["90°", "120°", "180°", "360°"],
//       correct: "180°",
//     },
//     {
//       question: "Jaki jest wzór na pole koła?",
//       answers: ["πr", "2πr", "πr²", "πd²/4"],
//       correct: "πr²",
//     },
//     {
//       question: "Ile wynosi 7 * (5 + 3)?",
//       answers: ["35", "40", "45", "56"],
//       correct: "56",
//     },
//   ],
// };

// export type Category = keyof typeof sampleQuestions;
