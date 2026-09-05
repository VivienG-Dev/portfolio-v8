import { Spacing } from "@/components/spacing";
import { getProjectIds, getProjectById } from "@/lib/projects";
import { SectionSingleProject } from "@/app/_components/projects/SectionSingleProject";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getProjectIds().map(projectName => ({ projectName }));
}

export default function Page({ params }: { params: { projectName: string } }) {
  const project = getProjectById(params.projectName, "en");
  if (!project?.published) notFound();
  return <main id="contenu"><Spacing /><SectionSingleProject projectId={params.projectName} locale="en" /></main>;
}
