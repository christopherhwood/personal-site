import type { WorkItem as WorkItemType } from "@/data/content";
import { WorkItem } from "./WorkItem";

export function WorkGrid({ items }: { items: WorkItemType[] }) {
  if (items.length === 0) return null;

  return (
    <div className="grid grid-cols-1 desktop:grid-cols-2 gap-10 mt-[60px]">
      {items.map((item) => (
        <WorkItem key={item.title} item={item} />
      ))}
    </div>
  );
}
