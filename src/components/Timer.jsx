import React, { useState, useEffect } from "react";

const Timer = (running) => {
  const [seconds, setSeconds] = useState(120);




  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [running, seconds]);

  return (
    <span>{seconds}</span>
  );
}

export default Timer;