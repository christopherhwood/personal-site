"use client";
import { useState, useEffect } from "react";

export function useHeaderCollapse(collapseDistance = 300) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setProgress(Math.min(y / collapseDistance, 1));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [collapseDistance]);

  return progress;
}
