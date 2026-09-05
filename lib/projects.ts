import englishProjects from "@/content/locales/projects.en.json";
import type { Locale } from "@/lib/i18n";
import projectsData from "@/content/projects.json";

export interface Project {
  id: string;
  published: boolean;
  featured: boolean;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  caseStudy?: { heading: string; body: string }[];
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  projectUrl?: string;
  mockupUrl?: string;
  originalUrl?: string;
}

function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "fr") return project;
  const translations: Record<string, { shortDescription: string; fullDescription: string[]; caseStudy?: Project["caseStudy"] }> = englishProjects;
  const translation = translations[project.id];
  if (!translation && project.published) throw new Error(`Missing English project translation: ${project.id}`);
  return translation ? { ...project, ...translation } : project;
}

export function getAllProjects(locale: Locale = "fr"): Project[] {
  return (projectsData.projects as Project[]).map(project => localizeProject(project, locale));
}

export function getProjectById(id: string, locale: Locale = "fr"): Project | undefined {
  const project = projectsData.projects.find(project => project.id === id) as Project | undefined;
  return project ? localizeProject(project, locale) : undefined;
}

export function getProjectIds(): string[] {
  return projectsData.projects.filter(project => project.published).map(project => project.id);
}
