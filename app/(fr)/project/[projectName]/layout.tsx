import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import { getProjectMetadata } from "@/lib/seo";

export function generateMetadata({ params }: { params: { projectName: string } }) {
  const project = getProjectById(params.projectName, "fr");
  if (!project?.published) notFound();
  return getProjectMetadata(project, "fr");
}

export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
