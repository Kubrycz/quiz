// import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Question from "../components/Question";
import { questions } from "../components/questions";
import Questions from "../models/questions";
import { useNavigate, useParams } from "react-router-dom";
import Timer from "../components/Timer";

const QuestionPage = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [selectAnswers, setSelectAnswers] = useState<string[]>([]);
  const [getQuestions, setQuestions] = useState<Questions[]>([]);
  const { id } = useParams();
  const { category } = useParams();
  const nextQuestion = Number(id);
  const isCorrect = true;
  const newScore = isCorrect ? score + 1 : score;

  const test = getQuestions.sort((x) => x.id);
  const idOfLastQuestion = test[test.length - 1]?.id;
  const idOfLastAsNumber = Number(idOfLastQuestion);

  useEffect(() => {
    async function getData() {
      if (getQuestions.length <= 0) {
        const response = await questions();
        1;
        setQuestions(response);
      }
    }
    getData();
  });

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === betterQuestion.correct;
    if (betterQuestion.id < idOfLastAsNumber) {
      if (isCorrect) {
        setScore(() => {
          console.log(`Updated Score: ${newScore}`);

          // if (betterQuestion.id + 1 === betterQuestion.question.length) {
          //   setTimeout(() => {
          //     localStorage.setItem(
          //       `quiz_${betterQuestion.category}_score`,
          //       newScore.toString()
          //     );
          //     console.log(`Final Score saved: ${newScore} pkt`);

          //   }, 100);
          // }

          navigate(
            `/quiz/${betterQuestion.category}/question/${nextQuestion + 1}`
          );
          return newScore;
        });
      } else {
        navigate(
          `/quiz/${betterQuestion.category}/question/${nextQuestion + 1}`
        );
      }
    } else {
      setTimeout(() => {
        localStorage.setItem(
          `quiz_${betterQuestion.category}_score`,
          newScore.toString()
        );
      }, 100);
      navigate(`/results/${betterQuestion.category}`);
    }

    setSelectAnswers(() => [...selectAnswers, answer]);
  };

  const whateverFunc = () => {
    if (betterQuestion.id === idOfLastQuestion) {
      navigate(`/results/${betterQuestion.category}`);
    } else {
      navigate(`/quiz/${betterQuestion.category}/question/${nextQuestion + 1}`);
    }
  };

  const betterCaregory = getQuestions.filter((y) => {
    const catStr = category?.toString();
    const cStr = y.category.toString();

    return catStr === cStr;
  })[0];

  const betterQuestion = getQuestions.filter((x) => {
    const idStr = id?.toString();
    const valStr = x.id.toString();

    return idStr === valStr;
  })[0];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4">
      <div>
        <Timer startTime={5} onTimeout={whateverFunc} key={nextQuestion} />
      </div>
      {betterQuestion ? (
        <Question
          question={betterQuestion.question}
          answers={betterQuestion.answers}
          onAnswer={handleAnswer}
        />
      ) : (
        <div>LOADING ...</div>
      )}
    </div>
  );
};

export default QuestionPage;
