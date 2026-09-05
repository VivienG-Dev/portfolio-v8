import type { Metadata } from "next";
import { localizedPath, type Locale } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

export const SITE_URL = "https://vivieng.com";
export const SITE_NAME = "Vivien Grenier — Portfolio";
const copy = {
  fr: {
    homeTitle: "Vivien Grenier | Développeur full stack JavaScript",
    homeDescription: "Vivien Grenier, développeur full stack JavaScript. Découvrez Manga Hive, mon produit en production, et mon parcours avec Vue, Nuxt et NestJS.",
    projectsTitle: "Projets & expérimentations | Vivien Grenier",
    projectsDescription: "Manga Hive, mon projet indépendant en production, puis mes expérimentations avec Strapi, Nuxt et JavaScript : les étapes de mon parcours de développeur.",
    imageAlt: "Vivien Grenier — Développeur full stack JavaScript",
    independent: "Projet indépendant", experiment: "Expérimentation", preview: "Aperçu de",
  },
  en: {
    homeTitle: "Vivien Grenier | Full-stack JavaScript Developer",
    homeDescription: "Vivien Grenier, full-stack JavaScript developer. Explore Manga Hive, my product running in production, and my experience with Vue, Nuxt and NestJS.",
    projectsTitle: "Projects & experiments | Vivien Grenier",
    projectsDescription: "Explore Manga Hive, my independent product running in production, and the Strapi, Nuxt and JavaScript experiments that shaped my journey as a developer.",
    imageAlt: "Vivien Grenier — Full-stack JavaScript Developer",
    independent: "Independent project", experiment: "Experiment", preview: "Preview of",
  },
};

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  locale?: Locale;
  image?: { url: string; alt: string; width?: number; height?: number };
}

export function languageAlternates(path: string) {
  return {
    fr: new URL(localizedPath(path, "fr"), SITE_URL).toString(),
    en: new URL(localizedPath(path, "en"), SITE_URL).toString(),
    "x-default": new URL(localizedPath(path, "fr"), SITE_URL).toString(),
  };
}

export function createPageMetadata({ title, description, path, locale = "fr", image }: PageMetadataOptions): Metadata {
  const url = new URL(localizedPath(path, locale), SITE_URL).toString();
  const socialImage = image ?? {
    url: locale === "en" ? "/vivieng-meta-image-en.png" : "/vivieng-meta-image.png",
    alt: copy[locale].imageAlt,
    width: 1200, height: 630,
  };
  const resolvedImage = { ...socialImage, url: new URL(socialImage.url, SITE_URL).toString() };
  return {
    title, description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title, description, url, siteName: SITE_NAME,
      locale: locale === "en" ? "en_GB" : "fr_FR",
      alternateLocale: locale === "en" ? ["fr_FR"] : ["en_GB"],
      type: "website", images: [resolvedImage],
    },
    twitter: {
      card: "summary_large_image", title, description,
      images: [{ url: resolvedImage.url, alt: resolvedImage.alt }],
    },
  };
}

export function getRootMetadata(locale: Locale): Metadata {
  return {
    ...createPageMetadata({ title: copy[locale].homeTitle, description: copy[locale].homeDescription, path: "/", locale }),
    metadataBase: new URL(SITE_URL),
    authors: [{ name: "Vivien Grenier", url: SITE_URL }],
    creator: "Vivien Grenier",
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

export function getProjectsMetadata(locale: Locale) {
  return createPageMetadata({ title: copy[locale].projectsTitle, description: copy[locale].projectsDescription, path: "/projects", locale });
}

export function getProjectMetadata(project: Project, locale: Locale) {
  const t = copy[locale];
  return createPageMetadata({
    title: `${project.title} — ${project.featured ? t.independent : t.experiment} | Vivien Grenier`,
    description: project.shortDescription, path: `/project/${project.id}`, locale,
    image: { url: project.imageUrl, alt: `${t.preview} ${project.title} — Vivien Grenier` },
  });
}
