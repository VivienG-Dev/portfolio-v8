import Image from "next/image";
import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const SingleProject = ({ project }: { project: Project }) => (
  <article className="space-y-10">
    <div className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <p className="mb-3 text-sm text-customGold-dark dark:text-customGold">{project.featured ? "Projet indépendant · Conception & développement" : "Expérimentation & premier projet"}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">{project.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{project.shortDescription}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.projectUrl && <Button asChild className="gap-2"><Link href={project.projectUrl}>Voir le site <ArrowUpRight size={16} /></Link></Button>}
          {project.githubUrl && <Button asChild variant="outline"><Link href={project.githubUrl}>Voir sur GitHub</Link></Button>}
          {project.mockupUrl && <Button asChild variant="outline"><Link href={project.mockupUrl}>Maquette</Link></Button>}
          {project.originalUrl && <Button asChild variant="outline"><Link href={project.originalUrl}>Site original</Link></Button>}
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-customGold/20 bg-muted/40"><Image src={project.imageUrl} alt={`Aperçu de ${project.title}`} fill priority className="object-cover object-top" sizes="(max-width: 768px) 90vw, 45vw" /></div>
    </div>
    {project.caseStudy ? <div className="grid gap-8 md:grid-cols-2">{project.caseStudy.map((section, index) => <section key={section.heading} className="border-t border-customGold/25 pt-5"><p aria-hidden="true" className="mb-3 text-sm text-customGold-dark dark:text-customGold">0{index + 1}</p><h2 className="text-xl font-semibold text-primary">{section.heading}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{section.body}</p></section>)}</div> : <section className="max-w-3xl"><h2 className="mb-4 text-2xl font-semibold text-primary">À propos du projet</h2>{project.fullDescription.map((paragraph, index) => <p key={index} className="mb-4 leading-relaxed text-muted-foreground">{paragraph}</p>)}</section>}
    <section className="border-t border-customGold/20 pt-6"><h2 className="mb-4 text-xl font-semibold text-primary">Technologies utilisées</h2><ul className="flex flex-wrap gap-2">{project.technologies.map(tech => <li key={tech} className="rounded-md bg-muted px-3 py-1.5 text-sm text-muted-foreground">{tech}</li>)}</ul></section>
  </article>
);
