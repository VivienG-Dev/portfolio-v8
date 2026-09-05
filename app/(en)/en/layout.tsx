import { SiteLayout } from "@/app/_components/SiteLayout";
import { getRootMetadata } from "@/lib/seo";

export const metadata = getRootMetadata("en");
export const viewport = { width: "device-width", initialScale: 1 };

export default function Layout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
