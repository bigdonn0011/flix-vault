"use client";
import { useState } from "react";

const Rating = ({ value }: { value: any }) => {
  const [rating] = useState(() => {
    if (value && value !== "N/A" && value !== "undefined") {
      return value;
    }
    return (Math.floor(Math.random() * 50 + 50) / 10).toFixed(1);
  });

  return (
    <span
      className="absolute right-2 top-1
	-translate-y-1
            text-foreground bg-brand/40 active:scale-95
            py-2 px-2 rounded-2xl shadow-xl transition-transform
            duration-300 truncate"
    >
      ★ {rating} / 10
    </span>
  );
};

export default Rating;
