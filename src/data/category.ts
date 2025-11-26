import Category from "../models/category";

export async function categoryApi(): Promise<Category[]> {
  const baseUrl = "https://68c0430a0b196b9ce1c3ceb4.mockapi.io/";
  const res = await fetch(`${baseUrl}/Category`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Błąd pobierania: ${res.status}`);
  }

  const data: Category[] = await res.json();
  return data;
}
