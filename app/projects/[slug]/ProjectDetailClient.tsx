"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import type { ProjectDetail, MediaBlock, ProjectAside, ProjectSection } from "@/data/projects";
import { BackLink } from "@/components/BackLink";

function MediaRenderer({ block, className }: { block: MediaBlock; className?: string }) {
  const base = className || "w-full rounded border border-primary/10";
  if (block.type === "youtube") {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${block.src}`}
        title={block.label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={base}
        style={{ aspectRatio: block.aspectRatio }}
      />
    );
  }
  if (block.type === "image") {
    return (
      <img
        src={block.src}
        alt={block.label}
        className={base}
        style={{ aspectRatio: block.aspectRatio }}
      />
    );
  }
  return (
    <video
      src={block.src}
      controls
      playsInline
      preload="metadata"
      className={base}
      style={{ aspectRatio: block.aspectRatio }}
    />
  );
}

function formatAsideText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*([^*]+)\*\*$/);
    if (boldMatch) {
      return <strong key={i} className="text-primary/90 font-semibold">{boldMatch[1]}</strong>;
    }
    const italicMatch = part.match(/^\*([^*]+)\*$/);
    if (italicMatch) {
      return <em key={i} className="text-primary/80">{italicMatch[1]}</em>;
    }
    return part;
  });
}

function CollapsibleBlock({ label, content }: { label: string; content: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-4">
      <button
        onClick={() => setOpen(!open)}
        className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
      >
        <span className="inline-block transition-transform" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}>
          &#9656;
        </span>
        {label}
      </button>
      {open && (
        <pre className="mt-3 bg-code rounded border border-primary/10 p-5 max-h-[400px] overflow-y-auto whitespace-pre-wrap break-words">
          <code className="font-mono text-[0.75rem] leading-[1.6] text-primary/70">
            {content}
          </code>
        </pre>
      )}
    </div>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onNav,
}: {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNav: (index: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") { e.preventDefault(); if (index > 0) onNav(index - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); if (index < images.length - 1) onNav(index + 1); }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav, index, images.length]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 overscroll-none"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors font-mono text-2xl leading-none"
        aria-label="Close"
      >
        &times;
      </button>
      {index > 0 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(index - 1); }}
          className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors font-mono text-3xl"
          aria-label="Previous"
        >
          &lsaquo;
        </button>
      )}
      {index < images.length - 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNav(index + 1); }}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors font-mono text-3xl"
          aria-label="Next"
        >
          &rsaquo;
        </button>
      )}
      <img
        src={img.src}
        alt={img.alt}
        className="max-w-[90vw] max-h-[90vh] rounded"
        onClick={(e) => e.stopPropagation()}
      />
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[0.7rem] text-white/50">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

function AsideBox({ aside }: { aside: ProjectAside }) {
  return (
    <div className="border-l-2 border-primary/20 bg-primary/[0.03] rounded-r pl-6 pr-6 py-5 my-10">
      <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted mb-3">
        {aside.title}
      </div>
      <p className="font-mono text-[0.85rem] leading-[1.8] text-primary/75">
        {formatAsideText(aside.body)}
      </p>
      {aside.codeBlock && (
        <pre className="mt-5 bg-code rounded border border-primary/10 p-5 overflow-x-auto">
          <code className="font-mono text-[0.75rem] leading-[1.6] text-primary/70">
            {aside.codeBlock.code}
          </code>
        </pre>
      )}
      {aside.collapsibles?.map((c, i) => (
        <CollapsibleBlock key={i} label={c.label} content={c.content} />
      ))}
      {aside.image && (
        <img
          src={aside.image.src}
          alt={aside.title}
          className="w-full mt-5 rounded"
          style={{ aspectRatio: aside.image.aspectRatio }}
        />
      )}
    </div>
  );
}

const COLLAPSE_DISTANCE = 150;
const CONTENT_GAP = 40;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function LinksSection({
  project,
  starsMap,
}: {
  project: ProjectDetail;
  starsMap: Record<string, number>;
}) {
  const hasLegacyLinks = project.siteUrl || project.repoUrl;
  const hasLinks = project.links && project.links.length > 0;
  if (!hasLegacyLinks && !hasLinks) return null;

  return (
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
        <div className="flex items-center gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
          >
            {project.repoLabel || "Repository"} &rarr;
          </a>
          {project.githubRepo && starsMap[project.githubRepo] > 0 && (
            <span className="font-mono text-[0.75rem] text-muted">
              &#9733; {starsMap[project.githubRepo].toLocaleString()}
            </span>
          )}
        </div>
      )}
      {project.links?.map((link) => (
        <div key={link.url} className="flex items-center gap-4">
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.75rem] text-muted hover:text-primary transition-colors flex items-center gap-2"
          >
            {link.label} &rarr;
          </a>
          {link.githubRepo && starsMap[link.githubRepo] > 0 && (
            <span className="font-mono text-[0.75rem] text-muted">
              &#9733; {starsMap[link.githubRepo].toLocaleString()}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

export function ProjectDetailClient({
  project,
  starsMap = {},
}: {
  project: ProjectDetail;
  starsMap?: Record<string, number>;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
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
    const title = titleRef.current;
    const meta = metaRef.current;
    const content = contentRef.current;
    if (!header || !title || !meta || !content) return;

    header.style.paddingTop = `${lerp(120, 20, t)}px`;
    header.style.paddingBottom = `${lerp(80, 20, t)}px`;

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
      };
      header.style.paddingTop = "20px";
      header.style.paddingBottom = "20px";
      if (titleRef.current) titleRef.current.style.fontSize = "1.5rem";
      const collapsedHeight = header.offsetHeight;
      header.style.paddingTop = saved.pt;
      header.style.paddingBottom = saved.pb;
      if (titleRef.current) titleRef.current.style.fontSize = saved.fs;

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
      <BackLink />

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
              <div key={i}>
                <p className="font-mono text-[0.9rem] leading-[1.8] text-primary/80 mb-8">
                  {p}
                </p>
                {project.asides
                  ?.filter((a) => a.afterParagraph === i)
                  .map((aside, j) => (
                    <AsideBox key={j} aside={aside} />
                  ))}
              </div>
            ))}
          </div>

          {project.codeComparisons && project.codeComparisons.length > 0 && (
            <div className="mt-16 space-y-10">
              {project.codeComparisons.map((comp, i) => (
                <div key={i}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                    {comp.title}
                  </div>
                  <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
                    <div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted/60 mb-2">
                        {comp.left.label}
                      </div>
                      <pre className="bg-code rounded border border-primary/10 p-5 overflow-x-auto h-full">
                        <code className="font-mono text-[0.75rem] leading-[1.6] text-primary/60">
                          {comp.left.code}
                        </code>
                      </pre>
                    </div>
                    <div>
                      <div className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-muted/60 mb-2">
                        {comp.right.label}
                      </div>
                      <pre className="bg-code rounded border border-primary/10 p-5 overflow-x-auto h-full">
                        <code className="font-mono text-[0.75rem] leading-[1.6] text-primary/80">
                          {comp.right.code}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {project.codeExamples && project.codeExamples.length > 0 && (
            <div className="mt-16 space-y-8">
              {project.codeExamples.map((example, i) => (
                <div key={i}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-3">
                    {example.label}
                  </div>
                  <pre className="bg-code rounded border border-primary/10 p-6 overflow-x-auto">
                    <code className="font-mono text-[0.8rem] leading-[1.6] text-primary/80">
                      {example.code}
                    </code>
                  </pre>
                </div>
              ))}
            </div>
          )}

          {project.media.length > 0 && project.mediaLayout === "carousel" && (
            <div className="mt-16">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                Screenshots
              </div>
              <div
                className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(227,224,212,0.2) transparent" }}
              >
                {project.media.map((block, i) => (
                  <div key={i} className="flex-none snap-start">
                    <div style={{ height: "420px" }}>
                      <MediaRenderer block={block} className="h-full w-auto rounded border border-primary/10" />
                    </div>
                    <p className="font-mono text-[0.65rem] text-muted mt-2">
                      {block.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.media.length > 0 && project.mediaLayout !== "carousel" && (
            <div className="mt-16 space-y-12">
              {project.media.map((block, i) => (
                <div key={i}>
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-3">
                    {block.label}
                  </div>
                  <MediaRenderer block={block} className="w-full rounded border border-primary/10" />
                  {block.caption && (
                    <p className="font-mono text-[0.7rem] text-muted mt-3">
                      {block.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && project.slug === "earlyworm" && (
            <div className="mt-16">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                Gallery
              </div>
              {/* Video left, reddit + review + traction stacked right */}
              <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
                <div>
                  <MediaRenderer block={project.gallery[0]} className="w-full rounded border border-primary/10" />
                  {project.gallery[0].caption && (
                    <p className="font-mono text-[0.65rem] text-muted mt-2">{project.gallery[0].caption}</p>
                  )}
                </div>
                <div className="flex flex-col gap-4 justify-center">
                  {project.gallery.slice(1, 4).map((block, i) => (
                    <div key={i}>
                      <MediaRenderer block={block} className="w-full rounded border border-primary/10" />
                      {block.caption && (
                        <p className="font-mono text-[0.65rem] text-muted mt-2">{block.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              {/* Architecture full width */}
              {project.gallery[4] && (
                <div className="mt-4">
                  <MediaRenderer block={project.gallery[4]} className="w-full rounded border border-primary/10" />
                  {project.gallery[4].caption && (
                    <p className="font-mono text-[0.65rem] text-muted mt-2">{project.gallery[4].caption}</p>
                  )}
                </div>
              )}
            </div>
          )}

          {project.gallery && project.gallery.length > 0 && project.slug !== "earlyworm" && (
            <div className="mt-16">
              <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                Gallery
              </div>
              <div
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory"
                style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(227,224,212,0.2) transparent" }}
              >
                {project.gallery.map((block, i) => (
                  <button
                    key={i}
                    className="flex-none snap-start cursor-zoom-in"
                    style={{ height: "200px" }}
                    onClick={() => block.type === "image" && setLightboxIndex(i)}
                  >
                    <MediaRenderer
                      block={block}
                      className="h-full w-auto rounded border border-primary/10"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {project.sections?.map((section, sIdx) => (
            <div key={sIdx} className="mt-20 pt-10 border-t border-primary/10">
              <h3 className="font-serif italic text-[1.8rem] leading-[1.2] mb-8 text-primary/90">
                {section.title}
              </h3>
              <div className="max-w-[680px]">
                {section.description.split("\n\n").map((p, pIdx) => (
                  <p key={pIdx} className="font-mono text-[0.9rem] leading-[1.8] text-primary/80 mb-8">
                    {p}
                  </p>
                ))}
              </div>
              {section.media && section.media.length > 0 && section.mediaLayout === "carousel" && (
                <div className="mt-8">
                  <div
                    className="flex gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory"
                    style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(227,224,212,0.2) transparent" }}
                  >
                    {section.media.map((block, i) => (
                      <div key={i} className="flex-none snap-start">
                        <div style={{ height: "420px" }}>
                          <MediaRenderer block={block} className="h-full w-auto rounded border border-primary/10" />
                        </div>
                        <p className="font-mono text-[0.65rem] text-muted mt-2">
                          {block.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {section.media && section.media.length > 0 && section.mediaLayout !== "carousel" && (
                <div className="mt-8 space-y-12">
                  {section.media.map((block, i) => (
                    <div key={i}>
                      <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-3">
                        {block.label}
                      </div>
                      <MediaRenderer block={block} className="w-full rounded border border-primary/10" />
                      {block.caption && (
                        <p className="font-mono text-[0.7rem] text-muted mt-3">
                          {block.caption}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
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

        <LinksSection project={project} starsMap={starsMap} />
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

        <LinksSection project={project} starsMap={starsMap} />
      </div>

      {lightboxIndex !== null && project.gallery && (() => {
        const images = project.gallery
          .filter((b) => b.type === "image")
          .map((b) => ({ src: b.src, alt: b.label }));
        return (
          <Lightbox
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNav={setLightboxIndex}
          />
        );
      })()}
    </div>
  );
}
