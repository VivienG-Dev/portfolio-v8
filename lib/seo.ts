import type { Metadata } from "next";

export const SITE_URL = "https://vivieng.com";
export const SITE_NAME = "Vivien Grenier — Portfolio";
export const HOME_TITLE = "Vivien Grenier | Développeur full stack JavaScript";
export const HOME_DESCRIPTION = "Vivien Grenier, développeur full stack JavaScript. Découvrez Manga Hive, mon produit en production, et mon parcours avec Vue, Nuxt et NestJS.";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  image?: { url: string; alt: string; width?: number; height?: number };
}

export function createPageMetadata({ title, description, path, image }: PageMetadataOptions): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const socialImage = image ?? {
    url: "/vivieng-meta-image.png",
    alt: "Vivien Grenier — Développeur full stack JavaScript",
    width: 1200,
    height: 630,
  };
  const resolvedImage = { ...socialImage, url: new URL(socialImage.url, SITE_URL).toString() };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [resolvedImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: resolvedImage.url, alt: resolvedImage.alt }],
    },
  };
}
