"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "../Section";
import { SideProject } from "./SideProject";
import { Title } from "../Title";
import { getAllProjects } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";

export const SectionSideProjects = () => {
  const isIndexPage = usePathname() === "/";
  const projects = getAllProjects().filter(project => project.published);
  const featuredProjects = projects.filter(project => project.featured);
  const experiments = projects.filter(project => !project.featured);
  return (
    <Section id="projets" title="Projets" rotate="-rotate-90" position="-right-20" className="flex flex-col gap-6">
      {!isIndexPage && <>
        <BreadcrumbComponent />
        <Title title="Projets" as="h1" />
      </>}
      <div>
        <Title title="Mon projet indépendant" />
        <p className="mt-3 text-muted-foreground">Un produit que je conçois, développe et maintiens en production.</p>
      </div>
      {featuredProjects.map(project => <SideProject key={project.id} {...project} prominent />)}
      {isIndexPage ? (
        <div className="text-center">
          <Link href="/projects#experimentations" className="inline-block py-2 text-sm text-muted-foreground underline underline-offset-4 transition-colors hover:text-primary">Voir mes autres projets</Link>
        </div>
      ) : experiments.length > 0 && (
        <section id="experimentations" className="mt-8 flex scroll-mt-36 flex-col gap-6 sm:scroll-mt-24">
          <div>
            <Title title="Expérimentations & premiers projets" />
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Des explorations techniques et des projets d’apprentissage qui retracent mon parcours, chacun avec un objectif précis.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {experiments.map(project => <SideProject key={project.id} {...project} />)}
          </div>
        </section>
      )}
    </Section>
  );
};
