import { type LocaleProps } from "@/lib/i18n";
import { Section } from "../Section";
import { SingleProject } from "./SingleProject";
import { getProjectById } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

export const SectionSingleProject = ({ projectId, locale = "fr" }: { projectId: string } & LocaleProps) => {
  const project = getProjectById(projectId, locale);
  if (!project) return null;
  return <Section className="flex flex-col gap-8"><BreadcrumbComponent projectId={projectId} locale={locale} /><SingleProject project={project} locale={locale} /></Section>;
};
