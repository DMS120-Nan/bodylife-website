"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sets = [
  { before: "/images/results-before.png", after: "/images/results-after.png", label: "Face · 4 weeks" },
  { before: "/images/results-before-2.png", after: "/images/results-after-2.png", label: "Arms · 4 weeks" },
  { before: "/images/results-before-3.png", after: "/images/results-after-3.png", label: "Neck · 4 weeks" },
];

export function BeforeAfterSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sets.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const set = sets[current];

  return (
    <div className="ba-slider">
      <div className="ba-slider-images">
        <div className="result-comparison-card">
          <div className="result-comparison-label">Before</div>
          <div className="result-comparison-img">
            <Image
              alt={`Before - ${set.label}`}
              src={set.before}
              fill
              sizes="(max-width: 700px) 45vw, 20vw"
              className="result-photo"
            />
          </div>
        </div>
        <div className="result-comparison-card">
          <div className="result-comparison-label result-comparison-label--after">After</div>
          <div className="result-comparison-img">
            <Image
              alt={`After - ${set.label}`}
              src={set.after}
              fill
              sizes="(max-width: 700px) 45vw, 20vw"
              className="result-photo"
            />
          </div>
        </div>
      </div>
      <div className="ba-slider-controls">
        <p className="ba-slider-label">{set.label}</p>
        <div className="ba-slider-dots">
          {sets.map((_, i) => (
            <button
              key={i}
              className={`ba-slider-dot ${i === current ? "ba-slider-dot--active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`View comparison ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
