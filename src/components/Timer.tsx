//Licznik czasu
import React, { useEffect, useState } from "react";

interface TimerProps{
    startTime: number;
  onTimeout: () => void;
}
const Timer: React.FC<TimerProps> = ({ startTime, onTimeout }) => {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeout]);

  return <div className="text-white text-lg font-bold">Czas: {timeLeft}s</div>;
};

export default Timer;