"use client";
import { sections } from "@/data/content";
import { useLayoutEffect, useRef, useCallback, useEffect, useState } from "react";
import { HOME_SIDEBAR_BAR_KEY } from "@/lib/homeState";

interface Props {
  activeSection: string;
  progress: number;
  isReady: boolean;
}

interface SidebarBarSnapshot {
  activeSection: string;
  top: number;
  height: number;
}

function readSidebarBarSnapshot(): SidebarBarSnapshot | null {
  try {
    const raw = sessionStorage.getItem(HOME_SIDEBAR_BAR_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SidebarBarSnapshot>;
    if (
      typeof parsed.activeSection !== "string" ||
      typeof parsed.top !== "number" ||
      typeof parsed.height !== "number" ||
      !Number.isFinite(parsed.top) ||
      !Number.isFinite(parsed.height)
    ) {
      return null;
    }
    return parsed as SidebarBarSnapshot;
  } catch {
    return null;
  }
}

function writeSidebarBarSnapshot(snapshot: SidebarBarSnapshot) {
  try {
    sessionStorage.setItem(HOME_SIDEBAR_BAR_KEY, JSON.stringify(snapshot));
  } catch {
    // Ignore storage errors.
  }
}

export function Sidebar({ activeSection, progress, isReady }: Props) {
  const navRef = useRef<HTMLUListElement>(null);
  const barRef = useRef<HTMLLIElement>(null);
  const prevSection = useRef(activeSection);
  const hasPositioned = useRef(false);
  const [enableTextTransitions, setEnableTextTransitions] = useState(false);

  const updateBar = useCallback(() => {
    if (!isReady || !navRef.current || !barRef.current) return;
    const links = navRef.current.querySelectorAll<HTMLLIElement>(
      ':scope > li[data-sidebar-year="1"]'
    );
    const activeIndex = sections.findIndex((s) => s.id === activeSection);
    if (activeIndex < 0 || !links[activeIndex]) return;

    const li = links[activeIndex];
    const bar = barRef.current;
    const sectionChanged =
      hasPositioned.current && prevSection.current !== activeSection;

    if (sectionChanged) {
      bar.style.transition = "top 200ms cubic-bezier(0.16, 1, 0.3, 1), height 200ms cubic-bezier(0.16, 1, 0.3, 1)";
    } else {
      bar.style.transition = "none";
    }

    const top = li.offsetTop;
    const height = li.offsetHeight * progress;
    bar.style.top = `${top}px`;
    bar.style.height = `${height}px`;
    prevSection.current = activeSection;
    hasPositioned.current = true;
    writeSidebarBarSnapshot({
      activeSection,
      top,
      height,
    });
  }, [activeSection, progress, isReady]);

  useLayoutEffect(() => {
    if (!barRef.current) return;
    const snapshot = readSidebarBarSnapshot();
    if (!snapshot || snapshot.activeSection !== activeSection) return;
    barRef.current.style.transition = "none";
    barRef.current.style.top = `${snapshot.top}px`;
    barRef.current.style.height = `${snapshot.height}px`;
    prevSection.current = activeSection;
    hasPositioned.current = true;
  }, [activeSection]);

  useLayoutEffect(() => {
    updateBar();
  }, [updateBar]);

  useEffect(() => {
    if (!isReady) return;
    const raf = requestAnimationFrame(() => {
      setEnableTextTransitions(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [isReady]);

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
          <li
            aria-hidden="true"
            ref={barRef}
            className={`absolute left-[-20px] top-0 w-[2px] bg-gradient-to-b from-primary to-transparent rounded-[2px] ${
              isReady ? "opacity-100" : "opacity-0"
            }`}
          />
          {sections.map((section) => {
            const isActive = isReady && activeSection === section.id;
            return (
              <li
                key={section.id}
                data-sidebar-year="1"
                className="mb-3 relative"
              >
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`font-mono text-[0.8rem] text-primary text-left hover:opacity-80 ${
                    enableTextTransitions ? "transition-opacity duration-300" : ""
                  } ${
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
              href="mailto:christopherhwood@gmail.com"
              className="font-mono text-[0.8rem] text-primary transition-opacity duration-300 hover:opacity-80 opacity-50"
            >
              Get in Touch ↗
            </a>
          </li>
          <li className="mt-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.8rem] text-primary transition-opacity duration-300 hover:opacity-80 opacity-50"
            >
              Resume ↗
            </a>
          </li>
          <li className="mt-3">
            <a
              href="/press"
              className="font-mono text-[0.8rem] text-primary transition-opacity duration-300 hover:opacity-80 opacity-50"
            >
              Press ↗
            </a>
          </li>
          <li className="mt-3">
            <a
              href="https://github.com/christopherhwood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-opacity duration-300 hover:opacity-80 opacity-50"
            >
              <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor" aria-label="GitHub">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <div className="hidden desktop:block font-mono text-[10px] opacity-30">
        CW &copy; 2026
      </div>
    </aside>
  );
}
