import type { LocaleProps } from "@/lib/i18n";
import { Hero } from "./Hero";
import { Spacing } from "@/components/spacing";
import { SectionExperiences } from "./experiences/SectionExperiences";
import { SectionSkills } from "./skills/SectionSkills";
import { Contact } from "./contact/SectionContact";
import { SectionSideProjects } from "./projects/SectionSideProjects";

export function HomePage({ locale = "fr" }: LocaleProps) {
  return (
    <main id="contenu">
      <Hero locale={locale} />
      <Spacing />
      <SectionSideProjects locale={locale} />
      <Spacing />
      <SectionExperiences locale={locale} />
      <Spacing />
      <SectionSkills locale={locale} />
      <Spacing />
      <Contact locale={locale} />
    </main>
  );
}
