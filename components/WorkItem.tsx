import Link from "next/link";
import type { WorkItem as WorkItemType } from "@/data/content";

export function WorkItem({ item }: { item: WorkItemType }) {
  const content = (
    <div className="border-t border-primary/10 pt-5 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-y-[-5px]">
      <h3 className="font-serif italic font-normal text-[1.8rem] mb-[10px]">
        {item.title}
      </h3>
      <p className="font-mono text-[0.75rem] text-muted">{item.subtitle}</p>
    </div>
  );

  if (item.type === "post" && item.slug) {
    return (
      <Link href={`/blog/${item.slug}`} className="block no-underline">
        {content}
      </Link>
    );
  }

  return content;
}
