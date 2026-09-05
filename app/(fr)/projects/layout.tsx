import { getProjectsMetadata } from "@/lib/seo";
export const metadata = getProjectsMetadata("fr");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
