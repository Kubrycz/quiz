import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { questions } from "../data/questions";
import { categories } from "../data/category";
import { Questions } from "../models/questions";
import { Category } from "../models/category";

const Quiz = () => {
  const [getCategory, setCategory] = useState<Category[]>([]);
  const [getQuestions, setQuestions] = useState<Questions[]>([]);
  const { category } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    async function getData() {
      if (getCategory.length <= 0) {
        const response = await categories();
        1;
        setCategory(response);
      }
    }
    getData();
  });

  const categoryThis = getCategory.find((x) => x.category === category);
  const test2 = getQuestions
    .filter((x) => x.categoryId === categoryThis?.id)
    .sort((a, b) => a.id - b.id);
  const idOdFirsttQuestion = test2[0]?.id;
  const idFirsttQuestion = Number(idOdFirsttQuestion);
  console.log(test2);

  return (
    <div className="flex flex-col items-center justyfy-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4x1 font-bold mb-6">Quiz: {category}</h1>
      <button
        onClick={() =>
          navigate(`/quiz/${category}/question/${idFirsttQuestion}`)
        }
        className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Start
      </button>
    </div>
  );
};
export default Quiz;
