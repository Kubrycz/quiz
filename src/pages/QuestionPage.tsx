import { useEffect, useState } from "react";
import Question from "../components/Question";
import { questions } from "../data/questions";
import { Questions } from "../models/questions";
import { Category } from "../models/category";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import { categories } from "../data/category";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [selectAnswers, setSelectAnswers] = useState<string[]>([]);
  const [getQuestions, setQuestions] = useState<Questions[]>([]);
  const [getCategory, setCategory] = useState<Category[]>([]);
  const { id } = useParams();
  const { category } = useParams();
  const nextQuestion = Number(id);
  const isCorrect = true;
  const newScore = isCorrect ? score + 1 : score;

  const categoryThis = getCategory.find((x) => x.category === category);
  if (!categoryThis) {
    console.log("Kategoria nie istnieje");
  }
  const questionsInCategory = getQuestions.filter(
    (x) => x.categoryId === Number(categoryThis?.id)
  );

  const lastQuestion = questionsInCategory.sort((a, b) => b.id - a.id)[0];
  const idOfLastQuestion = lastQuestion?.id;

  useEffect(() => {
    async function getData() {
      const [q, c] = await Promise.all([questions(), categories()]);
      setQuestions(q);
      setCategory(c);
    }
    getData();
  }, []);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === idOfActualQuestion.correct;
    if (idOfActualQuestion.id < Number(idOfLastQuestion)) {
      if (isCorrect) {
        setScore(() => {
          console.log(`Updated Score: ${newScore}`);
          navigate(
            `/quiz/${categoryThis?.category}/question/${nextQuestion + 1}`
          );
          return newScore;
        });
      } else {
        navigate(
          `/quiz/${categoryThis?.category}/question/${nextQuestion + 1}`
        );
      }
    } else {
      setTimeout(() => {
        localStorage.setItem(
          `quiz_${categoryThis?.category}_score`,
          newScore.toString()
        );
      }, 100);
      navigate(`/results/${categoryThis?.category}`);
    }
    setSelectAnswers(() => [...selectAnswers, answer]);
  };

  const whateverFunc = () => {
    if (idOfActualQuestion.id === Number(idOfLastQuestion)) {
      navigate(`/results/${categoryThis?.category}`);
    } else {
      navigate(`/quiz/${categoryThis?.category}/question/${nextQuestion + 1}`);
    }
  };

  const idOfActualQuestion = getQuestions.filter((y) => {
    const correctId = y.id.toString() === id;
    return correctId;
  })[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div>
        <Timer startTime={5} onTimeout={whateverFunc} key={nextQuestion} />
      </div>
      {idOfActualQuestion ? (
        <Question
          question={idOfActualQuestion.question}
          answers={idOfActualQuestion.answers}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>LOADING ...</div>
      )}
    </div>
  );
};

export default QuestionPage;
