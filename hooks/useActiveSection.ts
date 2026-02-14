"use client";
import { useState, useEffect } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const sectionElements = sectionIds
        .map((id) => ({ id, el: document.getElementById(id) }))
        .filter((s) => s.el !== null);

      let newActive = sectionIds[0];
      let newProgress = 0;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          newActive = id;
          const sectionTop = el.offsetTop;
          const sectionHeight = el.offsetHeight;
          newProgress = Math.min(
            1,
            Math.max(0, (scrollPosition - sectionTop) / sectionHeight)
          );
          break;
        }
      }

      setActiveSection(newActive);
      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds]);

  return { activeSection, progress };
}
