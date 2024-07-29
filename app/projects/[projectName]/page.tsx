import { Metadata } from "next";
import { Header } from "@/app/_components/Header";
import { Spacing } from "@/components/spacing";
import { getProjectIds, getProjectById } from "@/lib/projects";
import { SectionSingleProject } from "@/app/_components/projects/SectionSingleProject";
import { Footer } from "@/app/_components/Footer";

// Use getProjectById to get the data of the project to add in the metadata
export async function generateMetadata({ params }: { params: { projectName: string } }) {
  const project = getProjectById(params.projectName);
  if (!project) {
    return {
      title: "Side project not found",
      description: "Side project not found",
    };
  }
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: { params: { projectName: string } }) {
  return (
    <main>
      <Header />
      <Spacing />
      <SectionSingleProject projectId={params.projectName} />
      <Spacing />
      <Footer />
    </main>
  );
}

export function generateStaticParams() {
  return getProjectIds().map((id) => ({
    projectName: id,
  }));
}
