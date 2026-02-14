"use client";
import { sections } from "@/data/content";
import { useEffect, useRef, useCallback } from "react";

interface Props {
  activeSection: string;
  progress: number;
}

export function Sidebar({ activeSection, progress }: Props) {
  const navRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const prevSection = useRef(activeSection);

  const updateBar = useCallback(() => {
    if (!navRef.current || !barRef.current) return;
    const links = navRef.current.querySelectorAll<HTMLLIElement>(":scope > li");
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if (activeIndex < 0 || !links[activeIndex]) return;

    const li = links[activeIndex];
    const bar = barRef.current;
    const sectionChanged = prevSection.current !== activeSection;

    if (sectionChanged) {
      bar.style.transition = "top 200ms cubic-bezier(0.16, 1, 0.3, 1), height 200ms cubic-bezier(0.16, 1, 0.3, 1)";
      prevSection.current = activeSection;
    } else {
      bar.style.transition = "none";
    }

    bar.style.top = `${li.offsetTop}px`;
    bar.style.height = `${li.offsetHeight * progress}px`;
  }, [activeSection, progress]);

  useEffect(() => {
    updateBar();
  }, [updateBar]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="sidebar">
      <div>
        <h1 className="font-serif italic font-normal text-[3rem] leading-[1.1] mb-5 tracking-[-0.02em]">
          CHW
        </h1>
        <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted mt-[10px] block">
          Curious Engineer
        </span>
      </div>

      <nav className="hidden desktop:block">
        <ul ref={navRef} className="list-none relative">
          <div
            ref={barRef}
            className="absolute left-[-20px] top-0 w-[2px] bg-gradient-to-b from-primary to-transparent rounded-[2px]"
          />
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <li key={section.id} className="mb-3 relative">
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`font-mono text-[0.8rem] text-primary transition-opacity duration-300 text-left hover:opacity-80 ${
                    isActive ? "opacity-100" : "opacity-30"
                  }`}
                >
                  {section.yearRange}
                </button>
              </li>
            );
          })}
          <li className="mt-10">
            <a
              href="mailto:contact@christopherhwood.com"
              className="font-mono text-[0.8rem] text-primary transition-opacity duration-300 hover:opacity-80 opacity-50"
            >
              Get in Touch ↗
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden desktop:block font-mono text-[10px] opacity-30">
        CW &copy; 2025
      </div>
    </aside>
  );
}
