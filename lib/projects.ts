import projectsData from "@/content/projects.json";

export interface Project {
  id: string;
  published: boolean;
  featured: boolean;
  title: string;
  shortDescription: string;
  fullDescription: string[];
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  projectUrl?: string;
  mockupUrl?: string;
  originalUrl?: string;
}

export function getAllProjects(): Project[] {
  return projectsData.projects as Project[];
}

export function getProjectById(id: string): Project | undefined {
  return projectsData.projects.find((project) => project.id === id) as Project | undefined;
}

export function getProjectIds(): string[] {
  return projectsData.projects.map((project) => project.id);
}
