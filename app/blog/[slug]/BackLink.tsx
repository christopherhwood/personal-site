"use client";

import { useRouter } from "next/navigation";

export function BackLink() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className="font-mono text-primary/60 text-[0.8rem] hover:text-primary transition-colors"
    >
      &larr; Back to Stream
    </button>
  );
}
