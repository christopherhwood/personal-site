"use client";
import type { FilterType } from "@/hooks/useFilter";

interface Props {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
  { label: "Story", value: "all" },
  { label: "Projects", value: "projects" },
  { label: "Posts", value: "posts" },
];

export function FilterNav({ filter, setFilter }: Props) {
  return (
    <nav className="fixed top-[20px] right-[20px] desktop:top-[60px] desktop:right-[60px] z-[100] flex gap-[20px] desktop:gap-[30px]">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`font-mono text-[0.8rem] transition-opacity duration-300 ${
            filter === f.value
              ? "text-primary opacity-100"
              : "text-muted opacity-60 hover:opacity-80"
          }`}
        >
          {f.label}
        </button>
      ))}
    </nav>
  );
}
