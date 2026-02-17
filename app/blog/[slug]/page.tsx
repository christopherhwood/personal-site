import { posts, getPostBySlug, getAllSlugs } from "@/data/posts";
import { notFound } from "next/navigation";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { ReadingProgress } from "@/components/ReadingProgress";
import Link from "next/link";
import { BackLink } from "@/components/BackLink";
import type { Metadata } from "next";
import type { ContentBlock } from "@/data/posts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Christopher H. Wood`,
    description: post.subtitle,
  };
}

function renderInlineFormatting(text: string): React.ReactNode[] {
  const parts = text.split(/(\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      return (
        <em key={i} className="font-serif italic text-primary">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <span key={i} className="code-inline">
          {part.slice(1, -1)}
        </span>
      );
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-4 decoration-primary/30 hover:decoration-primary/60 transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return part;
  });
}

function renderBlock(block: ContentBlock, index: number) {
  if (typeof block === "string") {
    return <p key={index}>{renderInlineFormatting(block)}</p>;
  }
  if ("heading" in block) {
    return <h2 key={index}>{block.heading}</h2>;
  }
  if ("code" in block) {
    return (
      <pre key={index}>
        <code>{block.code}</code>
      </pre>
    );
  }
  return null;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <ReadingProgress />
      <BackLink />
      <div className="site-wrapper">
        <aside className="sidebar">
          <div>
            <Link href="/" className="no-underline">
              <h1 className="font-serif italic font-normal text-[3rem] leading-[1.1] mb-5 tracking-[-0.02em]">
                CHW
              </h1>
            </Link>
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.1em] text-muted mt-[10px] block">
              Curious Engineer
            </span>

            {post.aboutText && (
              <div className="mt-12 hidden desktop:block">
                <div className="pb-10 border-b border-primary/10">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                    About This Piece
                  </div>
                  <div className="font-serif italic text-[0.95rem] leading-[1.6] text-primary/70">
                    {post.aboutText}
                  </div>
                </div>

                {post.relatedSlugs.length > 0 && (
                  <div className="mt-10">
                    <div className="font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted mb-4">
                      Related
                    </div>
                    <ul className="space-y-5">
                      {post.relatedSlugs.map((relSlug) => {
                        const related = getPostBySlug(relSlug);
                        if (!related) return null;
                        return (
                          <li key={relSlug}>
                            <Link
                              href={`/blog/${relSlug}`}
                              className="block text-primary/70 hover:text-primary transition-opacity no-underline font-serif text-[0.9rem]"
                            >
                              {related.title}
                              <span className="block font-mono text-[0.6rem] uppercase text-muted mt-1">
                                Post
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="hidden desktop:block font-mono text-[10px] opacity-30">
            CW &copy; 2025
            <br />
            {post.chapterLabel} // {post.date.split(", ")[1] || post.date}
          </div>
        </aside>

        <main className="px-[5%] desktop:px-[10%] py-20 desktop:py-[120px] max-w-[900px]">
          <span className="font-mono text-[0.7rem] text-muted border-b border-muted pb-2 inline-block w-[100px]">
            {post.chapterLabel}
          </span>

          <h1 className="font-serif italic text-[2.5rem] desktop:text-[4rem] leading-[1.1] tracking-[-0.02em] mt-10 mb-14">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-6 desktop:gap-10 font-mono text-[0.7rem] desktop:text-[0.75rem] text-muted mb-20">
            <div>PUBLISHED: {post.date}</div>
            <div>READING TIME: {post.readingTime}</div>
            <div>TOPIC: {post.topic}</div>
          </div>

          <article className="prose max-w-[680px]">
            {post.content.map((block, i) => renderBlock(block, i))}
          </article>
        </main>
      </div>
    </>
  );
}
