"use client";

import Link from "next/link";
import { useEffect, useRef, useCallback } from "react";
import type { ProjectDetail } from "@/data/projects";

const COLLAPSE_DISTANCE = 150;
const CONTENT_GAP = 40;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function ProjectDetailClient({ project }: { project: ProjectDetail }) {
  const headerRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const serifRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const monoRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const metaRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const initialHeaderHeight = useRef(0);

  const update = useCallback(() => {
    const t = Math.min(window.scrollY / COLLAPSE_DISTANCE, 1);
    const cappedScroll = Math.min(window.scrollY, COLLAPSE_DISTANCE);

    const header = headerRef.current;
    const back = backRef.current;
    const title = titleRef.current;
    const meta = metaRef.current;
    const content = contentRef.current;
    if (!header || !back || !title || !meta || !content) return;

    header.style.paddingTop = `${lerp(120, 20, t)}px`;
    header.style.paddingBottom = `${lerp(80, 20, t)}px`;

    back.style.opacity = `${1 - t}`;
    back.style.marginBottom = `${lerp(60, 0, t)}px`;
    back.style.pointerEvents = t > 0.8 ? "none" : "auto";

    title.style.fontSize = `${lerp(5, 1.5, t)}rem`;

    for (const el of serifRefs.current) {
      if (el) el.style.opacity = `${1 - t}`;
    }
    for (const el of monoRefs.current) {
      if (el) el.style.opacity = `${t}`;
    }

    meta.style.fontSize = `${lerp(0.8, 0.7, t)}rem`;

    const shrinkage = initialHeaderHeight.current - header.offsetHeight;
    const offset = cappedScroll - shrinkage;
    content.style.transform = `translateY(${offset}px)`;

    // Sidebar: fixed, always right below the header
    const sidebar = sidebarRef.current;
    if (sidebar) {
      sidebar.style.top = `${header.offsetHeight + 20}px`;
    }
  }, []);

  useEffect(() => {
    const header = headerRef.current;
    const placeholder = placeholderRef.current;
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (header && placeholder && wrapper && content) {
      initialHeaderHeight.current = header.offsetHeight;
      placeholder.style.height = `${header.offsetHeight + CONTENT_GAP}px`;

      // Measure collapsed header height for bottom margin compensation
      const saved = {
        pt: header.style.paddingTop,
        pb: header.style.paddingBottom,
        fs: titleRef.current?.style.fontSize || "",
        mb: backRef.current?.style.marginBottom || "",
      };
      header.style.paddingTop = "20px";
      header.style.paddingBottom = "20px";
      if (titleRef.current) titleRef.current.style.fontSize = "1.5rem";
      if (backRef.current) backRef.current.style.marginBottom = "0px";
      const collapsedHeight = header.offsetHeight;
      header.style.paddingTop = saved.pt;
      header.style.paddingBottom = saved.pb;
      if (titleRef.current) titleRef.current.style.fontSize = saved.fs;
      if (backRef.current) backRef.current.style.marginBottom = saved.mb;

      const totalShrinkage = initialHeaderHeight.current - collapsedHeight;
      const finalOffset = COLLAPSE_DISTANCE - totalShrinkage;
      content.style.marginBottom = `${finalOffset}px`;

      wrapper.style.minHeight = `${window.innerHeight + COLLAPSE_DISTANCE}px`;
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  const descriptionParagraphs = project.description.split("\n\n");

  return (
    <div ref={wrapperRef}>
      {/* Fixed collapsing header */}
      <header
        ref={headerRef}
        className="project-hero fixed top-0 left-0 right-0 z-100 bg-surface border-b border-primary/10"
        style={{
          paddingTop: "120px",
          paddingBottom: "80px",
          paddingLeft: "10%",
          paddingRight: "10%",
        }}
      >
        <div
          ref={backRef}
          style={{ opacity: 1, marginBottom: "60px" }}
        >
          <Link
            href="/"
            className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors inline-flex items-center gap-2"
          >
            <span>&larr;</span> Back
          </Link>
        </div>

        <h1
          ref={titleRef}
          className="relative leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: "5rem" }}
        >
          {project.titleLines.map((line, i) => (
            <span key={i} className="block relative">
              <span
                ref={(el) => { serifRefs.current[i] = el; }}
                className="font-serif italic"
                style={{ opacity: 1 }}
              >
                {line}
              </span>
              <span
                ref={(el) => { monoRefs.current[i] = el; }}
                className="font-mono font-bold absolute inset-0"
                style={{ opacity: 0 }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        <div
          ref={metaRef}
          className="flex flex-wrap gap-6 font-mono text-muted uppercase tracking-[0.1em] mt-4"
          style={{ fontSize: "0.8rem" }}
        >
          <span>{project.year}</span>
          <span>{project.role}</span>
          <span>{project.status}</span>
        </div>
      </header>

      {/* Placeholder: reserves expanded header height + gap */}
      <div ref={placeholderRef} />

      {/* Main content — translated to track header bottom */}
      <div ref={contentRef} className="desktop:mr-[350px]">
        <main className="px-[5%] desktop:px-[10%] pb-10 desktop:pb-16">
          <h2 className="font-serif italic text-[2rem] desktop:text-[2.5rem] leading-[1.2] mb-10 text-primary/90">
            {project.subtitle}
          </h2>

          <div className="max-w-[680px]">
            {descriptionParagraphs.map((p, i) => (
              <p
                key={i}
                className="font-mono text-[0.9rem] leading-[1.8] text-primary/80 mb-8"
              >
                {p}
              </p>
            ))}
          </div>

          {project.media.length > 0 && (
            <div className="mt-16 space-y-12">
              {project.media.map((block, i) => (
                <div key={i}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-3">
                    {block.label}
                  </div>
                  {block.type === "image" ? (
                    <img
                      src={block.src}
                      alt={block.label}
                      className="w-full rounded border border-primary/10"
                      style={{ aspectRatio: block.aspectRatio }}
                    />
                  ) : (
                    <video
                      src={block.src}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full rounded border border-primary/10"
                      style={{ aspectRatio: block.aspectRatio }}
                    />
                  )}
                  {block.caption && (
                    <p className="font-mono text-[0.7rem] text-muted mt-3">
                      {block.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Sidebar — fixed on desktop, tracks header bottom */}
      <aside
        ref={sidebarRef}
        className="project-sidebar px-[5%] desktop:px-10 pb-20 desktop:pb-0 hidden desktop:block desktop:fixed desktop:right-0 desktop:w-[350px] desktop:border-l desktop:border-primary/10 desktop:overflow-y-auto"
        style={{ bottom: 0 }}
      >
        {project.stack.length > 0 && (
          <div className="mb-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.75rem] text-primary/70 border border-primary/10 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.features.length > 0 && (
          <div className="mb-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
              Features
            </div>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="font-mono text-[0.8rem] text-primary/70 pl-4 border-l border-primary/10"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(project.siteUrl || project.repoUrl) && (
          <div className="mb-10 space-y-4">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
              >
                {project.siteLabel || "Website"} &rarr;
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
              >
                {project.repoLabel || "Repository"} &rarr;
              </a>
            )}
          </div>
        )}
      </aside>

      {/* Mobile sidebar (in flow) */}
      <div className="desktop:hidden project-sidebar px-[5%] pb-20">
        {project.stack.length > 0 && (
          <div className="mb-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
              Stack
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[0.75rem] text-primary/70 border border-primary/10 px-3 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.features.length > 0 && (
          <div className="mb-10">
            <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
              Features
            </div>
            <ul className="space-y-3">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="font-mono text-[0.8rem] text-primary/70 pl-4 border-l border-primary/10"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {(project.siteUrl || project.repoUrl) && (
          <div className="mb-10 space-y-4">
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
              >
                {project.siteLabel || "Website"} &rarr;
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
              >
                {project.repoLabel || "Repository"} &rarr;
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
