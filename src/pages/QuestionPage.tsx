// import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { questions } from "../data/questions";
import { categoryApi } from "../data/category";
import Questions from "../models/questions";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "../components/Timer";
import Category from "../models/category";

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

  const test = getQuestions
    .filter((x) => x.categoryId === categoryThis?.id)
    .sort((a, b) => b.id - a.id);
  const idOfLastQuestion = test[0]?.id;
  console.log("PARAMS category:", category);
  console.log("Category list:", getCategory);

  useEffect(() => {
    async function getData() {
      if (getQuestions.length <= 0) {
        const response = await questions();
        1;
        setQuestions(response);
      }
      if (getCategory.length <= 0) {
        const response1 = await categoryApi();
        1;
        setCategory(response1);
      }
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      if (getCategory.length <= 0) {
        const response = await categoryApi();
        1;
        setCategory(response);
      }
    }
    getData();
  });

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === betterCaregory.correct;
    if (betterCaregory.id < idOfLastQuestion) {
      if (isCorrect) {
        setScore(() => {
          console.log(`Updated Score: ${newScore}`);
          navigate(`/quiz/${categoryThis}/question/${nextQuestion + 1}`);
          return newScore;
        });
      } else {
        navigate(`/quiz/${categoryThis}/question/${nextQuestion + 1}`);
      }
    } else {
      setTimeout(() => {
        localStorage.setItem(`quiz_${categoryThis}_score`, newScore.toString());
      }, 100);
      navigate(`/results/${categoryThis}`);
    }

    setSelectAnswers(() => [...selectAnswers, answer]);
  };

  const whateverFunc = () => {
    if (betterCaregory?.id === idOfLastQuestion) {
      navigate(`/results/${categoryThis?.category}`);
    } else {
      navigate(`/quiz/${categoryThis?.category}/question/${nextQuestion + 1}`);
    }
  };

  const betterCaregory = getQuestions.filter((y) => {
    const correctId = y.id?.toString() === id;
    return correctId;
  })[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div>
        <Timer startTime={5} onTimeout={whateverFunc} key={nextQuestion} />
      </div>
      {betterCaregory ? (
        <Question
          question={betterCaregory.question}
          answers={betterCaregory.answers}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>LOADING ...</div>
      )}
    </div>
  );
};

export default QuestionPage;
