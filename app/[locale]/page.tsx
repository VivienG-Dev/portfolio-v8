import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Spacing } from "@/components/spacing";
import { SectionExperiences } from "./_components/experiences/SectionExperiences";
import { SectionSkills } from "./_components/skills/SectionSkills";
import { Footer } from "./_components/Footer";
import { Contact } from "./_components/Contact";
import { SectionSideProjects } from "./_components/projects/SectionSideProjects";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main>
      <Header />
      <Hero />
      <Spacing />
      <SectionExperiences />
      <Spacing />
      <SectionSideProjects />
      <Spacing />
      <SectionSkills />
      <Spacing />
      <Contact />
      <Spacing />
      <Footer />
    </main>
  );
}
