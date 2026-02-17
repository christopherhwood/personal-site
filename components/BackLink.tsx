"use client";

import { useRouter } from "next/navigation";

interface BackLinkProps {
  className?: string;
  children?: React.ReactNode;
}

export function BackLink({ className, children }: BackLinkProps) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
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
