import type { TimelineSection as SectionType } from "@/data/content";
import { featuredProjects } from "@/data/content";
import { TimelineSection } from "./TimelineSection";
import { FeaturedSection } from "./FeaturedSection";
import type { FilterType } from "@/hooks/useFilter";

interface Props {
  sections: SectionType[];
  filter: FilterType;
}

export function ContentStream({ sections, filter }: Props) {
  return (
    <div className="pt-[120px] px-[5%] desktop:px-[10%] pb-[120px] max-w-[1200px] relative">
      {filter !== "posts" && <FeaturedSection items={featuredProjects} />}
      {sections.map((section) => (
        <TimelineSection
          key={section.id}
          section={section}
          filter={filter}
        />
      ))}
    </div>
  );
}
