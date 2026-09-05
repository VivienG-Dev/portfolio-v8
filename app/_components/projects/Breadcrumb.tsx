import { dictionaries, localizedPath, type LocaleProps } from "@/lib/i18n";
import Link from "next/link";
import { getProjectById } from "@/lib/projects";
import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type BreadcrumbProps = LocaleProps & {
  projectId?: string;
};

export const BreadcrumbComponent = ({ projectId, locale = "fr" }: BreadcrumbProps) => {
  const t = dictionaries[locale];
  return (
    <Breadcrumb aria-label={t.breadcrumb}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href={localizedPath("/", locale)}>{t.home}</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={localizedPath("/projects", locale)}>{t.projects}</BreadcrumbLink>
        </BreadcrumbItem>
        {projectId && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>{getProjectById(projectId, locale)?.title ?? projectId}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
