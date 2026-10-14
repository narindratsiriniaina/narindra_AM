"use client";
import { useState } from "react";

type Props = {
  items: React.ReactNode[];
};

export default function Carousel({ items }: Props) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full">
      <div className="overflow-hidden rounded-xl border border-foreground/10 bg-white p-8">
        {items[index]}
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full border border-accent text-accent
            hover:bg-accent hover:text-white transition-colors"
          aria-label="Précédent"
        >
          ←
        </button>

        <div className="flex gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Aller à la slide ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-colors
                ${i === index ? "bg-accent" : "bg-gray-300"}
              `}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-11 h-11 rounded-full border border-accent text-accent
            hover:bg-accent hover:text-white transition-colors"
          aria-label="Suivant"
        >
          →
        </button>
      </div>
    </div>
  );
}