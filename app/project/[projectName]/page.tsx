import { Spacing } from "@/components/spacing";
import { getProjectIds, getProjectById } from "@/lib/projects";
import { SectionSingleProject } from "@/app/_components/projects/SectionSingleProject";
import { notFound } from "next/navigation";
export async function generateStaticParams() {
  const projectIds = await getProjectIds();
  return projectIds.map((id) => ({
    projectName: id,
  }));
}

export default async function ProjectPage({ params }: { params: { projectName: string } }) {
  const project = await getProjectById(params.projectName);

  if (!project) {
    notFound();
  }
  return (
    <main>
      <Spacing />
      <SectionSingleProject projectId={params.projectName} />
    </main>
  );
}
