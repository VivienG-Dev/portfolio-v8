import { Spacing } from "@/components/spacing";
import { getProjectIds } from "@/lib/projects";
import { SectionSingleProject } from "@/app/_components/projects/SectionSingleProject";

export default function ProjectPage({ params }: { params: { projectName: string } }) {
  return (
    <main>
      <Spacing />
      <SectionSingleProject projectId={params.projectName} />
    </main>
  );
}

export function generateStaticParams() {
  return getProjectIds().map((id) => ({
    projectName: id,
  }));
}
