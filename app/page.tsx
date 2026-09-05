import { Hero } from "./_components/Hero";
import { Spacing } from "@/components/spacing";
import { SectionExperiences } from "./_components/experiences/SectionExperiences";
import { SectionSkills } from "./_components/skills/SectionSkills";
import { Contact } from "./_components/contact/SectionContact";
import { SectionSideProjects } from "./_components/projects/SectionSideProjects";

export default function Home() {
  return (
    <main id="contenu">
      <Hero />
      <Spacing />
      <SectionSideProjects />
      <Spacing />
      <SectionExperiences />
      <Spacing />
      <SectionSkills />
      <Spacing />
      <Contact />
    </main>
  );
}
