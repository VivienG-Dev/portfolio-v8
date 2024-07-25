import { Metadata } from "next";
import { Header } from "../_components/Header";
import { Spacing } from "@/components/spacing";
import { SectionSideProjects } from "../_components/projects/SectionSideProjects";
import { Footer } from "../_components/Footer";
import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "All projects",
};

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
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
