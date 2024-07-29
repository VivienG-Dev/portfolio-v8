import { Metadata } from "next";
import { Header } from "../_components/Header";
import { Spacing } from "@/components/spacing";
import { SectionSideProjects } from "../_components/projects/SectionSideProjects";
import { Footer } from "../_components/Footer";

export const metadata: Metadata = {
  title: "Mes side projects | VivienG",
  description: "Liste de tous mes side projects !",
  keywords: ["web development", "portfolio", "projects", "frontend", "backend", "fullstack"],
  authors: [{ name: "Vivien G" }],
  openGraph: {
    title: "Mes side projects | VivienG",
    description: "Liste de tous mes side projects !",
    url: "https://www.your-portfolio-url.com",
    siteName: "Développeur web | VivienG",
    images: [
      {
        url: "https://www.vivieng.com/images/vivieng-meta-image.jpg",
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
    title: "Mes side projects | VivienG",
    description: "Liste de tous mes side projects !",
    images: ["https://www.vivieng.com/images/vivieng-meta-image.jpg"],
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
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <Header />
      <Spacing />
      <SectionSideProjects />
      <Spacing />
      <Footer />
    </main>
  );
}
