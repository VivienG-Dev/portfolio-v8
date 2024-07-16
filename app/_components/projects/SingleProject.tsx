import Image from "next/image";
import { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface SingleProjectProps {
  project: Project;
}

export const SingleProject = ({ project }: SingleProjectProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-shrink-0">
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={450}
          height={450}
          className="rounded-lg w-full md:w-auto"
          sizes="(max-width: 768px) 20vw, 450px"
          placeholder="blur"
          blurDataURL={project.imageUrl}
        />
      </div>
      <div>
        <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">{project.title}</h1>
        <ul className="flex gap-2 flex-wrap mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} className="text-background">
              {tech}
            </Badge>
          ))}
        </ul>
        {project.fullDescription.map((paragraph, index) => (
          <p key={index} className="text-muted-foreground mb-4">
            {paragraph}
          </p>
        ))}
        <p className="text-muted-foreground mb-4" />
        <div className="flex gap-4">
          {project.githubUrl && (
            <Link href={project.githubUrl}>
              <Button>Voir sur GitHub</Button>
            </Link>
          )}
          {project.projectUrl && (
            <Link href={project.projectUrl}>
              <Button>Voir le site</Button>
            </Link>
          )}
          {project.mockupUrl && (
            <Link href={project.mockupUrl}>
              <Button>Maquette</Button>
            </Link>
          )}
          {project.originalUrl && (
            <Link href={project.originalUrl}>
              <Button>Voir le site original</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
