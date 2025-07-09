// Komponent pojedyńczego pytanie
import React from "react";

interface QuestionProps {
  question: string;
  answers: string[];
  onAnswer: (answear: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, answers, onAnswer }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white mb-6">{question}</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => {
              console.log(`Test click: ${answer}`);
              onAnswer(answer);
            }}
            className="p-4 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
