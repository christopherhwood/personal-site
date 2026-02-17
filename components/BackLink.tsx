"use client";

import { useRouter } from "next/navigation";
import { markHomeRestorePending } from "@/lib/homeState";

interface BackLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackLink({ className, children }: BackLinkProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        markHomeRestorePending();
        router.push("/", { scroll: false });
      }}
      className={
        className ??
        "fixed top-6 left-[5%] desktop:left-10 z-200 font-mono text-[0.75rem] text-muted hover:text-primary transition-colors inline-flex items-center gap-2"
      }
    >
      {children ?? (
        <>
          <span>&larr;</span> Back
        </>
      )}
    </button>
  );
}
