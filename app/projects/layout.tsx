import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projets | VivienG - Développeur Front-end & Full Stack",
  description:
    "Découvrez mon portfolio de projets web développés avec Vue.js, Nuxt, et Next.js. \
    Applications full stack modernes et sites vitrines performants.",
  keywords: ["web development", "portfolio", "projects", "frontend", "backend", "fullstack"],
  authors: [{ name: "VivienG" }],
  openGraph: {
    title: "Projets | VivienG - Développeur Front-end & Full Stack",
    description:
      "Découvrez mon portfolio de projets web développés avec Vue.js, Nuxt, et Next.js. \
      Applications full stack modernes et sites vitrines performants.",
    url: "https://www.vivieng.com",
    siteName: "Développeur web | VivienG",
    images: [
      {
        url: "https://www.vivieng.com/vivieng-meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "VivienG Portfolio Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projets | VivienG - Développeur Front-end & Full Stack",
    description: "Découvrez mon portfolio de projets web développés avec Vue.js, Nuxt, et Next.js. Applications full stack modernes et sites vitrines performants.",
    images: ["https://www.vivieng.com/vivieng-meta-image.jpg"],
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

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
