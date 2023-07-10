import React, { useState, useEffect } from "react";

const TimerPersist = () => {
  const [seconds, setSeconds] = useState(
    parseInt(localStorage.getItem("timerSeconds")) || 0
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        const updatedSeconds = prevSeconds + 1;
        localStorage.setItem("timerSeconds", updatedSeconds.toString());
        return updatedSeconds;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((time % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (time % 60).toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>Timer (Browser):</h2>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default TimerPersist;
