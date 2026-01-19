import { z } from "zod";

export const QuestionsSchema = z.object({
  id: z.string().transform(Number),
  categoryId: z.string().transform(Number),
  question: z.string(),
    answers: z.tuple([z.string(), z.string(),z.string(), z.string()]),
    correct: z.string(),
});
export type Questions = z.infer<typeof QuestionsSchema>;