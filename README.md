# ✨ Quiz App – React + TypeScript

Prosty quiz, który pozwala użytkownikom wybierać kategorię, odpowiadać na pytania, a na końcu otrzymać wynik.  
Każde pytanie ma licznik, który po upływie czasu przekierowuje nas do wyniku końcowego.

---

## ✨ Funkcje

- Wybór kategorii quizu
- Sortowanie i filtrowanie pytań
- Timer odliczający czas na odpowiedź
- Automatyczne przejście do kolejnego pytania
- Podsumowanie wyniku w `localStorage`
- Obsługa błędów i stanu ładowania
- Stylizacja UI z TailwindCSS

---

## ✨ Technologie i narzędzia

- **React** – tworzenie komponentów UI  
- **TypeScript** – typowanie i bezpieczeństwo kodu  
- **Vite** – szybkie środowisko developerskie  
- **TailwindCSS** – stylizowanie aplikacji  
- **Zod** – walidacja danych i generowanie typów TS  
- **MockAPI** – backend do pytań i kategorii  
- **React Router** – nawigacja między pytaniami  
- **Vercel** – hosting i CI/CD  

---

## 🌐 Live Demo

Kliknij w obrazek, aby zobaczyć aplikację na żywo:  

[![Strona główna aplikacji](assets/Home.jpg)](https://twoja-aplikacja.vercel.app)

---

## ✨ Struktura projektu

```
src/
├─ components/
│  ├─ CategoryButton.tsx
│  ├─ Question.tsx
│  ├─ Timer.tsx
├─ data/
│  ├─ category.ts
│  ├─ questions.ts
├─ models/
│  ├─ category.ts
│  ├─ questions.ts
├─ pages/
│  ├─ Home.tsx
│  ├─ QuestionPage.tsx
│  ├─ Quiz.tsx
│  ├─ Results.tsx
├─ App.tsx
├─ doc.ts
├─ main.ts
```

