import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countdownDate = new Date("2023-09-07T16:00:00Z").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      setTimeLeft(`${days}d ${hours}h `);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{timeLeft}</p>;
}

export default Countdown;
