"use client";
import { useState } from "react";

export type FilterType = "all" | "projects" | "posts";

export function useFilter() {
  const [filter, setFilter] = useState<FilterType>("all");
  return { filter, setFilter };
}
