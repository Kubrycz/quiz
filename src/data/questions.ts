import { Questions, QuestionsSchema } from "../models/questions";
import { z } from "zod";

export async function questions(): Promise<Questions[]> {
  const baseUrl = "https://68c0430a0b196b9ce1c3ceb4.mockapi.io/";
  const res = await fetch(`${baseUrl}/Questions`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Błąd pobierania: ${res.status}`);
  }
  const data = await res.json();
  
  const questions = z.array(QuestionsSchema).parse(data);
  return questions;
}