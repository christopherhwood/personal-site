"use client";
import { useEffect, useRef, useCallback } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    if (!initialized.current) {
      initialized.current = true;
      document.body.classList.add("cursor-visible");
    }

    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    outline.animate(
      { left: `${e.clientX}px`, top: `${e.clientY}px` },
      { duration: 500, fill: "forwards" }
    );
  }, []);

  useEffect(() => {
    if (window.matchMedia("(max-width: 900px)").matches) return;
    if ("ontouchstart" in window) return;

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.classList.remove("cursor-visible");
    };
  }, [handleMouseMove]);

  return (
    <>
      <div ref={outlineRef} className="cursor-outline hidden desktop:block" />
      <div ref={dotRef} className="cursor-dot hidden desktop:block" />
    </>
  );
}
