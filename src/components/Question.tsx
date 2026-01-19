interface QuestionProps {
  question: string;
  answers: [string, string, string, string];
  onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  answers,
  onAnswer,
}) => {

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold text-white mb-6">{question}</h2>
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {answers.map((answer, id) => (
          <button
            key={id}
            onClick={() => {
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
