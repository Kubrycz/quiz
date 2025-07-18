import CategoryButton from "../components/CategoryButton";

const categories = [
  { name: "Matematyka", color: "bg-red-500" },
  { name: "Geografia", color: "bg-blue-500" },
  { name: "Historia", color: "bg-green-500" },
  { name: "Fizyka", color: "bg-yellow-500" },
  { name: "Chemia", color: "bg-purple-500" },
  { name: "Biologia", color: "bg-pink-500" },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-5xl font-bold mb-8 text-blue-400">QUIZ</h1>
      <div className="grid grid-cols-2 gap-4 w-full max-w-xl">
        {categories.map(({ name, color }) => (
          <CategoryButton key={name} name={name} color={color} />
        ))}
      </div>
    </div>
  );
};

export default Home;
