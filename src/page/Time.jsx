import React, { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Har bir soniyada bir setTime ishga tushadi

    return () => {
      clearInterval(interval); // Komponent ochiq bo'lishida intervalni to'xtatish
    };
  }, []);

  return (
    <div>
      <button className="border btn p-[10px] ml-[900px] rounded-[12px]">
        {time.toLocaleTimeString()}
      </button>
    </div>
  );
}
