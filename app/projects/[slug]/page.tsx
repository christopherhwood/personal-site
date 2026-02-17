import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { getRepositoryStars } from "@/lib/github";
import { notFound } from "next/navigation";
import { GrainOverlay } from "@/components/GrainOverlay";
import { CustomCursor } from "@/components/CustomCursor";
import { ReadingProgress } from "@/components/ReadingProgress";
import { ProjectDetailClient } from "./ProjectDetailClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.titleLines.join(" ")} | Christopher H. Wood`,
    description: project.subtitle,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const reposToFetch: string[] = [];
  if (project.githubRepo) reposToFetch.push(project.githubRepo);
  if (project.links) {
    for (const link of project.links) {
      if (link.githubRepo) reposToFetch.push(link.githubRepo);
    }
  }

  const starCounts = await Promise.all(
    reposToFetch.map((repo) => getRepositoryStars(repo))
  );
  const starsMap: Record<string, number> = {};
  reposToFetch.forEach((repo, i) => {
    starsMap[repo] = starCounts[i];
  });

  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <ReadingProgress />
      <ProjectDetailClient project={project} starsMap={starsMap} />
    </>
  );
}
