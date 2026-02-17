import { pressItems } from "@/data/press";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { BackLink } from "@/components/BackLink";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press | Christopher H. Wood",
  description: "Selected press coverage and accolades.",
};

export default function PressPage() {
  const years = [...new Set(pressItems.map((item) => item.year))].sort(
    (a, b) => b - a
  );

  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <BackLink />
      <div className="site-wrapper">
        <aside className="sidebar">
          <div className="shrink-0">
            <Link href="/" className="no-underline">
              <h1 className="font-serif italic font-normal text-[3rem] leading-[1.1] mb-5 tracking-[-0.02em]">
                CHW
              </h1>
            </Link>
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted mt-[10px] block">
              Curious Engineer
            </span>
          </div>

          <div className="hidden desktop:block font-mono text-[10px] opacity-30 shrink-0 pt-2 pb-0">
            CW &copy; 2026
          </div>
        </aside>

        <main className="px-[5%] desktop:px-[10%] py-20 desktop:py-[120px] max-w-[900px]">
          <h1 className="font-serif italic text-[2.5rem] desktop:text-[4rem] leading-[1.1] tracking-[-0.02em] mb-6">
            Press
          </h1>

          <p className="font-mono text-[0.85rem] text-muted mb-20">
            Some selected accolades
          </p>

          {years.map((year) => (
            <div key={year} className="mb-16">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-6">
                {year}
              </div>
              <ul className="space-y-5">
                {pressItems
                  .filter((item) => item.year === year)
                  .map((item, i) => (
                    <li
                      key={i}
                      className="border-t border-primary/10 pt-4"
                    >
                      {item.url ? (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-serif text-[1.1rem] text-primary/80 hover:text-primary transition-colors inline-flex items-baseline gap-2"
                        >
                          {item.title}
                        </a>
                      ) : (
                        <span className="font-serif text-[1.1rem] text-primary/60">
                          {item.title}
                        </span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </main>
      </div>
    </>
  );
}
