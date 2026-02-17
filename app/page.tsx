"use client";
import { useEffect, useLayoutEffect } from "react";
import { Sidebar } from "@/components/Sidebar";
import { FilterNav } from "@/components/FilterNav";
import { ContentStream } from "@/components/ContentStream";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { useFilter } from "@/hooks/useFilter";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sections } from "@/data/content";
import {
  HOME_RESTORE_PENDING_KEY,
  HOME_SCROLL_KEY,
  saveHomeScrollPosition,
} from "@/lib/homeState";

const SECTION_IDS = sections.map((s) => s.id);

export default function Home() {
  const { filter, setFilter } = useFilter();
  const { activeSection, progress, isReady } = useActiveSection(SECTION_IDS);

  useLayoutEffect(() => {
    const shouldRestore =
      sessionStorage.getItem(HOME_RESTORE_PENDING_KEY) === "1";
    if (!shouldRestore) return;

    const savedScroll = sessionStorage.getItem(HOME_SCROLL_KEY);
    const y = savedScroll ? parseInt(savedScroll, 10) : NaN;

    if (!Number.isFinite(y) || y < 0) {
      sessionStorage.removeItem(HOME_RESTORE_PENDING_KEY);
      return;
    }

    // Apply immediately in layout phase to avoid a top->saved jump.
    window.scrollTo(0, y);

    let frameCount = 0;
    const restore = () => {
      window.scrollTo(0, y);
      frameCount += 1;
      if (Math.abs(window.scrollY - y) > 1 && frameCount < 30) {
        requestAnimationFrame(restore);
        return;
      }
      sessionStorage.removeItem(HOME_RESTORE_PENDING_KEY);
    };

    if (Math.abs(window.scrollY - y) <= 1) {
      sessionStorage.removeItem(HOME_RESTORE_PENDING_KEY);
      return;
    }

    requestAnimationFrame(restore);
  }, []);

  useEffect(() => {
    const onScroll = () => saveHomeScrollPosition();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <svg className="absolute w-0 h-0">
        <defs>
          <filter id="ink-bleed">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="20"
              xChannelSelector="R"
              yChannelSelector="G"
            />
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>
      </svg>
      <div className="site-wrapper">
        <Sidebar
          activeSection={activeSection}
          progress={progress}
          isReady={isReady}
        />
        <main>
          <FilterNav filter={filter} setFilter={setFilter} />
          <ContentStream sections={sections} filter={filter} />
        </main>
      </div>
    </>
  );
}
