import { useEffect, useState } from "react";
import CategoryButton from "../components/CategoryButton";
import Category from "../models/category";
import { categoryApi } from "../data/category";

const Home = () => {
  const [getCategory, setCategory] = useState<Category[]>([]);

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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-5xl font-bold mb-8 text-blue-400">QUIZ</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
        {getCategory.map((value) => (
          <CategoryButton
            key={value.id}
            name={value.category}
            color={value.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
