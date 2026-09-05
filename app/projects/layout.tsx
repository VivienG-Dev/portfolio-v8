import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projets & expérimentations | Vivien Grenier",
  description: "Manga Hive, mon projet indépendant en production, puis mes expérimentations avec Strapi, Nuxt et JavaScript : les étapes de mon parcours de développeur.",
  path: "/projects",
});

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
