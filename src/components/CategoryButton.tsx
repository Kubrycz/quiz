//Guziki do wyboru kategorii
import React from "react";
import { useNavigate } from "react-router-dom";

interface CategoryButtonProps {
  name: string;
  color: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ name, color }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/quiz/${name.toLowerCase()}`)}
      className={`h-32 flex items-center justify-center text-gray-800 text-xl font-bold rounded-lg shadow-lg hover:scale-105 transition ${color}`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;