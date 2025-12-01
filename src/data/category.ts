import { Category, CategorySchema } from "../models/category";
import { z } from "zod";

export async function categories(): Promise<Category[]> {
  const baseUrl = "https://68c0430a0b196b9ce1c3ceb4.mockapi.io/";
  const res = await fetch(`${baseUrl}/Category`);

  if (!res.ok) {
    throw new Error(`Błąd pobierania: ${res.status}`);
  }
  const data = await res.json();

  const categories = z.array(CategorySchema).parse(data);

  return categories;

  // const data: Category[] = await res.json();
  // return data;
}
