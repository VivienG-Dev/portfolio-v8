import type { MetadataRoute } from "next";
import { getProjectIds } from "@/lib/projects";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/projects", ...getProjectIds().map(id => `/project/${id}`)].map(path => ({
    url: new URL(path, SITE_URL).toString(),
  }));
}
