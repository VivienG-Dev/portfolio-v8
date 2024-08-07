import { Metadata } from "next";
import { getProjectById } from "@/lib/projects";

export async function generateMetadata({ params }: { params: { projectName: string } }): Promise<Metadata> {
  const project = getProjectById(params.projectName);

  if (!project) {
    return {
      title: "Side project not found",
      description: "Side project not found",
    };
  }

  const title = `${project.title} | VivienG`;
  const description = project.shortDescription;
  const url = `https://www.vivieng.com/projects/${params.projectName}`;
  const keywords = project.technologies;

  return {
    title,
    description,
    keywords: keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Développeur web | VivienG",
      images: [
        {
          url: `https://www.vivieng.com/images/${project.imageUrl}`,
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
      locale: "fr_FR",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.vivieng.com/images/${project.imageUrl}`], // Again, consider using a project-specific image
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
