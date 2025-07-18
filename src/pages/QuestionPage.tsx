import { useParams, useNavigate } from "react-router-dom";
import Question from "../components/Question";
import Timer from "../components/Timer";
import { sampleQuestions } from "../components/questions";
import { useState } from "react";

const QuestionPage = () => {
  const { category, id } = useParams<{ category: string; id: string }>();
  const navigate = useNavigate();
  const questions =
    sampleQuestions[category as keyof typeof sampleQuestions] || [];
  const questionIndex = Number(id) - 1;
  const questionData = questions[questionIndex];

  const [selectAnswers, setSelectAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (!questionData) return; // Jeśli pytanie nie istnieje, nie rób nic

    const isCorrect = answer === questionData.correct;


    console.log(`Answer: ${answer}`);
    console.log(`Correct answer: ${questionData.correct}`);
    console.log(`Is Correct: ${isCorrect}`);
    console.log(
      `Question Index: ${questionIndex}, Total Questions: ${questions.length}`
    );

    setScore(() => {
      const newScore = isCorrect ? score + 1 : score;
      console.log(`Updated Score: ${newScore}`);

      // Jeśli to ostatnie pytanie, zapisujemy wynik do localStorage i przechodzimy do wyników
      if (questionIndex + 1 === questions.length) {
        // setTimeout(() => {
        localStorage.setItem(`quiz_${category}_score`, newScore.toString()); // Zapisujemy bez przeliczania na %
        console.log(`Final Score saved: ${newScore} pkt`);
        navigate(`/results/${category}`);
        // }, 100); // 🔹 Krótkie opóźnienie, aby `setScore` zdążyło się zaktualizować
      } else {
        navigate(`/quiz/${category}/question/${questionIndex + 2}`);
      }

      return newScore;
    });

    setSelectAnswers(() => [...selectAnswers, answer]);
  };

  const whateverFunc = () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <Timer startTime={5} onTimeout={whateverFunc} />
      <Question
        question={questionData.question}
        answers={questionData.answers}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default QuestionPage;
