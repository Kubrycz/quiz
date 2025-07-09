/*  
Cel Quiz:
- użytkownik wybiera kategorię na stronie głównej
- przechodzi do strony startowej quizu
- po kliknięciu guzika "start" przechodzi do odpowiedzi na 10 pytań 
- ma licznik czasu
- dostaje wynik końcowy

Struktura:
- Home - strona główka z kategoriami /quiz:category
- QuizStart - strona z przyciskiem "start" /quiz/:category/start
- Quiz - pytanie quizowe, licznik czasu, przegodzenie do następnego pytania
- Result - podsumowanie wyniku, przycisk powrót do strony startowej "Home" /result

Wykorzystanie:
Vite - bounder
React - frontend
Ts - język
React Router - nawigacja stron
useReducer, useContext - zarządznie stanem
Convex/Firebase - pobieranie pytań
Tailwind - css

........................................................................................................................................................................

React Router pozwala przechodzić między stronami, ale w rzeczywistości nie przeładowuje strony – renderuje tylko potrzebne komponenty.
W naszej aplikacji quizowej użyjemy dynamicznych ścieżek, np.:

/ – Strona główna (wybór kategorii)
/quiz/:category – Ekran startowy quizu
/quiz/:category/start – Pytania
/result – Wynik końcowy
Dzięki useNavigate możemy zmieniać strony np. po kliknięciu przycisku.
useParams pozwala nam pobrać nazwę kategorii z URL-a.

zarządzanie stanem:
 za pomocą useContext i useReducer: QuizContext.tsx

przechodzenie między pytaniami:
za pomocą indeksu w stanie currentQuestion, po ostatnim nawigujemy na strone wyników/

przechowywanie pytań:

licznik czasu:
useEffect + setTimeout
jeśli czas się skończy, przechodzimy do następnego pyt.



*/