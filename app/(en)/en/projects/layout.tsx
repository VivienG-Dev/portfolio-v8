import { getProjectsMetadata } from "@/lib/seo";
export const metadata = getProjectsMetadata("en");
export default function Layout({ children }: { children: React.ReactNode }) { return <>{children}</>; }
