import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
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

  return (
    <>
      <GrainOverlay />
      <CustomCursor />
      <ReadingProgress />
      <ProjectDetailClient project={project} />
    </>
  );
}
