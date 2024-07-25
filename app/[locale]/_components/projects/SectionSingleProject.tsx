import { Section } from "../Section";
import { Title } from "../Title";
import { Card } from "@/components/ui/card";
import { SingleProject } from "./SingleProject";
import { getProjectById } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

interface SectionSingleProjectProps {
  projectId: string;
}

export const SectionSingleProject = ({ projectId }: SectionSingleProjectProps) => {
  const project = getProjectById(projectId);

  const renderProjectContent = () => {
    if (!project) {
      return <div>Project not found</div>;
    }
    return <SingleProject project={project} />;
  };

  return (
    <Section className="flex flex-col gap-4" title="Side Projects" rotate="-rotate-90" position="-right-20">
      <BreadcrumbComponent projectId={projectId} />
      <Title title="Project Details" />
      <Card className="flex flex-col flex-wrap gap-4 p-4">{renderProjectContent()}</Card>
    </Section>
  );
};
