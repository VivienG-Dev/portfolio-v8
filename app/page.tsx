import { Hero } from "./_components/Hero";
import { Spacing } from "@/components/spacing";
import { SectionExperiences } from "./_components/experiences/SectionExperiences";
import { SectionSkills } from "./_components/skills/SectionSkills";
import { Contact } from "./_components/contact/SectionContact";
import { SectionSideProjects } from "./_components/projects/SectionSideProjects";

export default function Home() {
  return (
    <main>
      <Hero />
      <Spacing />
      <SectionExperiences />
      <Spacing />
      <SectionSideProjects />
      <Spacing />
      <SectionSkills />
      <Spacing />
      <Contact />
    </main>
  );
}
