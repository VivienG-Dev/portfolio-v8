"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "../Section";
import { SideProject } from "./SideProject";
import { Title } from "../Title";
import { getAllProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { BreadcrumbComponent } from "./Breadcrumb";

export const SectionSideProjects = () => {
  const pathname = usePathname();
  const isIndexPage = pathname === "/fr" || pathname === "/en";
  const projects = isIndexPage ? getAllProjects().filter((project) => project.featured) : getAllProjects();

  return (
    <Section className="flex flex-col gap-4" title="Side Projects" rotate="-rotate-90" position="-right-20">
      {!isIndexPage && <BreadcrumbComponent />}
      <Title title="Side Projects" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            <SideProject {...project} />
          </div>
        ))}
      </div>
      {isIndexPage && (
        <Link className="text-primary text-center" href={`${pathname}/projects`}>
          <Button variant="link">Voir tous les projets</Button>
        </Link>
      )}
    </Section>
  );
};
