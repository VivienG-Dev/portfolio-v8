import type { Metadata } from "next";
import { projects } from "@/content/projects.json";

type Props = {
  params: { projectName: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find(p => p.id === params.projectName);

  if (!project) {
    return {
      title: "Projet non trouvé | VivienG",
      description: "Le projet demandé n'existe pas."
    };
  }

  return {
    title: `${project.title} | Projet VivienG`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Projet VivienG - Développeur Front-end & Full Stack`,
      description: project.shortDescription,
      images: [
        {
          url: `https://www.vivieng.com${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `Aperçu du projet ${project.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Projet VivienG`,
      description: project.shortDescription,
      images: [`https://www.vivieng.com${project.imageUrl}`],
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
