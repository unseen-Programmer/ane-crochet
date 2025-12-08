// src/components/HeartRain.jsx
import React, { useEffect, useState } from "react";

export default function HeartRain() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // spawn hearts
    const spawn = setInterval(() => {
      const size = Math.floor(Math.random() * 14) + 10; // 10–24px
      setHearts((prev) => {
        const newHeart = {
          id: Date.now(),
          left: Math.random() * window.innerWidth,
          size,
          duration: (Math.random() * 3 + 3).toFixed(2), // 3–6s
        };

        // Limit hearts visible to max 10
        const updated = [...prev, newHeart];
        if (updated.length > 10) updated.shift(); // remove oldest

        return updated;
      });
    }, 650);

    // remove finished hearts
    const cleanup = setInterval(() => {
      setHearts((prev) => prev.filter((h) => Date.now() - h.id < 7000));
    }, 2000);

    return () => {
      clearInterval(spawn);
      clearInterval(cleanup);
    };
  }, []);

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="heart-rain select-none pointer-events-none"
          style={{
            left: heart.left,
            width: heart.size,
            height: heart.size,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </>
  );
}
