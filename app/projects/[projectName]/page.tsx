import { Header } from "@/app/_components/Header";
import { Spacing } from "@/components/spacing";
import { getProjectIds } from "@/lib/projects";
import { SectionSingleProject } from "@/app/_components/projects/SectionSingleProject";
import { Footer } from "@/app/_components/Footer";

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
