import { Metadata } from "next";
import { Header } from "../_components/Header";
import { Spacing } from "@/components/spacing";
import { SectionSideProjects } from "../_components/projects/SectionSideProjects";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "All projects",
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Spacing />
      <SectionSideProjects />
      <Spacing />
      <Footer />
    </main>
  );
}
