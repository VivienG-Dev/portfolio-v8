"use client";
import { dictionaries, localizedPath, type LocaleProps } from "@/lib/i18n";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "../Section";
import { SideProject } from "./SideProject";
import { Title } from "../Title";
import { getAllProjects } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

export const SectionSideProjects = ({ locale = "fr" }: LocaleProps) => {
  const t = dictionaries[locale];
  const isIndexPage = usePathname().replace(/\/$/, "") === localizedPath("/", locale).replace(/\/$/, "");
  const projects = getAllProjects(locale).filter(project => project.published);
  const featuredProjects = projects.filter(project => project.featured);
  const experiments = projects.filter(project => !project.featured);
  return (
    <Section id="projets" title={t.projects} rotate="-rotate-90" position="-right-20" className="flex flex-col gap-6">
      {!isIndexPage && <>
        <BreadcrumbComponent locale={locale} />
        <Title title={t.projects} as="h1" />
      </>}
      <div>
        <Title title={t.independentTitle} />
        <p className="mt-3 text-muted-foreground">{t.independentIntro}</p>
      </div>
      {featuredProjects.map(project => <SideProject key={project.id} {...project} locale={locale} prominent />)}
      {isIndexPage ? (
        <div className="text-center">
          <Link href={localizedPath("/projects", locale) + "#experimentations"} className="inline-block py-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary">{t.otherProjects}</Link>
        </div>
      ) : experiments.length > 0 && (
        <section id="experimentations" className="mt-8 flex scroll-mt-36 flex-col gap-6 sm:scroll-mt-24">
          <div>
            <Title title={t.experimentsTitle} />
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{t.experimentsIntro}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experiments.map(project => <SideProject key={project.id} {...project} locale={locale} />)}
          </div>
        </section>
      )}
    </Section>
  );
};
