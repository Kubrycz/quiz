import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Results = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    console.log("Category:", category); 

    if (!category) {
      console.error("Brak kategorii w URL!");
      navigate("/");
      return;
    }
    //Pobieramy wynik z localStorage
    const storedScore = localStorage.getItem(`quiz_${category}_score`);
    if (storedScore !== null) {
      setScore(Number(storedScore));
    } else {
      console.log("There was no score, sad monkey");
      navigate("/"); 
    }
  }, [category, navigate]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Twój wynik</h1>
      {score !== null ? (
        <>
          <p className="text-2xl">
            Zdobyłeś: <span className="text-green-400">{score} pkt</span>
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-blue-500 px-4 py-2 rounded-lg hover:scale-105 transition"
          >
            Powrót do strony głównej
          </button>
        </>
      ) : (
        <p className="text-red-500">Błąd: Brak wyniku</p>
      )}
    </div>
  );
};
export default Results;
