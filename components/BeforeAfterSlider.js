"use client";

import { useState } from "react";
import Image from "next/image";

const sets = [
  { id: "face", label: "Face", before: "/images/results-before.png", after: "/images/results-after.png" },
  { id: "arms", label: "Arms", before: "/images/results-before-2.png", after: "/images/results-after-2.png" },
  { id: "neck", label: "Neck", before: "/images/results-before-3.png", after: "/images/results-after-3.png" },
];

export function BeforeAfterSlider() {
  const [current, setCurrent] = useState(0);
  const set = sets[current];

  return (
    <div className="ba-widget">
      <div className="ba-tabs">
        {sets.map((s, i) => (
          <button
            key={s.id}
            className={`ba-tab ${i === current ? "ba-tab--active" : ""}`}
            onClick={() => setCurrent(i)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className="ba-images">
        <div className="ba-image-card">
          <span className="ba-image-label">Before</span>
          <div className="ba-image-wrapper">
            <Image
              alt={`Before - ${set.label}`}
              src={set.before}
              fill
              sizes="(max-width: 700px) 42vw, 280px"
              className="ba-photo"
            />
          </div>
          <span className="ba-image-caption">Day 1</span>
        </div>
        <div className="ba-arrow">→</div>
        <div className="ba-image-card">
          <span className="ba-image-label ba-image-label--after">After</span>
          <div className="ba-image-wrapper">
            <Image
              alt={`After - ${set.label}`}
              src={set.after}
              fill
              sizes="(max-width: 700px) 42vw, 280px"
              className="ba-photo"
            />
          </div>
          <span className="ba-image-caption">Week 4</span>
        </div>
      </div>
    </div>
  );
}
