import type { MetadataRoute } from "next";
import { getProjectIds } from "@/lib/projects";
import { locales, localizedPath } from "@/lib/i18n";
import { SITE_URL, languageAlternates } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", ...getProjectIds().map(id => `/project/${id}`)].flatMap(path => locales.map(locale => ({
    url: new URL(localizedPath(path, locale), SITE_URL).toString(),
    alternates: { languages: languageAlternates(path) },
  })));
}
