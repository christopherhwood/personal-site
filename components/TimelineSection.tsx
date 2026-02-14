"use client";
import type { TimelineSection as SectionType } from "@/data/content";
import { WorkGrid } from "./WorkGrid";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { FilterType } from "@/hooks/useFilter";

interface Props {
  section: SectionType;
  filter: FilterType;
}

export function TimelineSection({ section, filter }: Props) {
  const { ref, isVisible, shouldAnimate } = useIntersectionObserver();

  const filteredItems =
    filter === "all"
      ? section.items
      : section.items.filter((item) =>
          filter === "projects"
            ? item.type === "project"
            : item.type === "post"
        );

  const isEmpty = filter !== "all" && filteredItems.length === 0;
  const isFiltered = filter !== "all";

  return (
    <section
      id={section.id}
      className={`filter-section ${isEmpty ? "collapsed" : ""}`}
    >
      <div
        ref={ref}
        className={`fade-up ${shouldAnimate ? "will-animate" : ""} ${isVisible ? "visible" : ""} ${isFiltered ? "mb-[100px]" : "mb-[200px]"}`}
      >
        <span className="font-mono text-[0.7rem] text-muted border-b border-muted pb-[10px] mb-10 inline-block w-[100px]">
          {section.chapterLabel}
        </span>

        <h2 className="font-serif italic font-normal text-[2.5rem] desktop:text-[3.5rem] leading-[1.2] mb-10 max-w-[90%]">
          {section.displayText}
        </h2>

        {!isFiltered &&
          section.bodyTexts.map((text, i) => (
            <p
              key={i}
              className="font-mono text-[0.95rem] text-primary/80 max-w-[550px] leading-[1.8] ml-auto mt-[30px] first:mt-0"
            >
              {text}
            </p>
          ))}

        <WorkGrid items={filteredItems} />
      </div>
    </section>
  );
}
