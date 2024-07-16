import { Section } from "../Section";
import { Title } from "../Title";
import { Card } from "@/components/ui/card";
import { SingleProject } from "./SingleProject";
import { getAllProjects, getProjectById, Project } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

interface SectionSingleProjectProps {
  projectId?: string;
}

export const SectionSingleProject = ({ projectId }: SectionSingleProjectProps) => {
  let projects: Project[];

  if (projectId) {
    const project = getProjectById(projectId);
    projects = project ? [project] : [];
  } else {
    projects = getAllProjects();
  }

  return (
    <Section className="flex flex-col gap-4" title="Side Projects" rotate="-rotate-90" position="-right-20">
      <BreadcrumbComponent projectId={projectId} />
      <Title title="Project Details" />
      <Card className="flex flex-col flex-wrap gap-4 p-4">
        {projects.map((project) => (
          <SingleProject key={project.id} project={project} />
        ))}
      </Card>
    </Section>
  );
};
