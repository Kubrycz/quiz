//Strona quizu
import { useNavigate, useParams } from "react-router-dom";

const Quiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justyfy-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4x1 font-bold mb-6">Quiz: {category}</h1>
      <button
        onClick={() => navigate(`/quiz/${category}/question/1`)}
        className="bg-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
      >
        Start
      </button>
    </div>
  );
};
export default Quiz;
