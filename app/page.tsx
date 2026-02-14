"use client";
import { Sidebar } from "@/components/Sidebar";
import { FilterNav } from "@/components/FilterNav";
import { ContentStream } from "@/components/ContentStream";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { useFilter } from "@/hooks/useFilter";
import { useActiveSection } from "@/hooks/useActiveSection";
import { sections } from "@/data/content";

export default function Home() {
  const { filter, setFilter } = useFilter();
  const { activeSection, progress } = useActiveSection(
    sections.map((s) => s.id)
  );

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
        <Sidebar activeSection={activeSection} progress={progress} />
        <main>
          <FilterNav filter={filter} setFilter={setFilter} />
          <ContentStream sections={sections} filter={filter} />
        </main>
      </div>
    </>
  );
}
