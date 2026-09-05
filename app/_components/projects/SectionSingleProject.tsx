import { Section } from "../Section";
import { SingleProject } from "./SingleProject";
import { getProjectById } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

export const SectionSingleProject = ({ projectId }: { projectId: string }) => {
  const project = getProjectById(projectId);
  if (!project) return null;
  return <Section className="flex flex-col gap-8"><BreadcrumbComponent projectId={projectId} /><SingleProject project={project} /></Section>;
};
