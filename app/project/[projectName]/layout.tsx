import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { createPageMetadata } from "@/lib/seo";

type Props = {
  params: { projectName: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectById(params.projectName);
  if (!project?.published) notFound();

  return createPageMetadata({
    title: `${project.title} — ${project.featured ? "Projet indépendant" : "Expérimentation"} | Vivien Grenier`,
    description: project.shortDescription,
    path: `/project/${project.id}`,
    image: {
      url: project.imageUrl,
      alt: `Aperçu de ${project.title}, un projet de Vivien Grenier`,
    },
  });
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
