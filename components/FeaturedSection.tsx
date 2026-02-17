"use client";
import Link from "next/link";
import type { FeaturedProject } from "@/data/content";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

function FeaturedItem({ item }: { item: FeaturedProject }) {
  const inner = (
    <div
      className={`border border-primary/10 p-4 h-full ${
        item.slug
          ? "transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-3px] hover:border-primary/20"
          : ""
      }`}
    >
      <h3
        className={`font-serif italic font-normal text-[1.1rem] leading-tight mb-[4px] ${
          !item.slug ? "text-primary/60" : ""
        }`}
      >
        {item.title}
      </h3>
      <p className="font-mono text-[0.7rem] text-muted">
        {item.subtitle}
      </p>
    </div>
  );

  if (item.slug) {
    return (
      <Link href={`/projects/${item.slug}`} className="block no-underline h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}

export function FeaturedSection({ items }: { items: FeaturedProject[] }) {
  const { ref, isVisible, shouldAnimate } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-up ${shouldAnimate ? "will-animate" : ""} ${isVisible ? "visible" : ""} mb-[100px]`}
    >
      <span className="font-mono text-[0.7rem] text-muted uppercase tracking-widest border-b border-muted pb-[10px] mb-6 inline-block">
        Selected Work
      </span>

      <div className="grid grid-cols-2 desktop:grid-cols-5 gap-[1px] auto-rows-[1fr]">
        {items.map((item) => (
          <FeaturedItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
