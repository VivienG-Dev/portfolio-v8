import { dictionaries, localizedPath, type LocaleProps } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/projects";

export const SideProject = ({ title, shortDescription, id, imageUrl, technologies, prominent = false, locale = "fr" }: Project & LocaleProps & { prominent?: boolean }) => {
  const t = dictionaries[locale];
  return (
  <Link href={localizedPath(`/project/${id}`, locale)} className={`group flex h-full overflow-hidden rounded-2xl border border-customGold/20 bg-card transition-colors hover:border-customGold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-customGold ${prominent ? "flex-col md:flex-row" : "flex-col"}`}>
    <div className={`relative overflow-hidden bg-muted/40 ${prominent ? "h-64 md:h-auto md:min-h-80 md:w-1/2" : "h-52"}`}>
      <Image src={imageUrl} alt={`${t.preview} ${title}`} fill className="object-cover object-top" sizes={prominent ? "(max-width: 768px) 90vw, 45vw" : "(max-width: 768px) 90vw, 40vw"} />
    </div>
    <div className={`flex flex-1 flex-col items-start p-6 sm:p-8 ${prominent ? "justify-center md:w-1/2" : ""}`}>
      {prominent && <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-customGold-dark dark:text-customGold">{t.featuredLabel}</p>}
      <h3 className={`font-semibold tracking-tight text-primary ${prominent ? "text-3xl" : "text-xl"}`}>{title}</h3>
      <p className="mt-3 leading-relaxed text-muted-foreground">{shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">{(prominent ? ["Nuxt", "NestJS", "React Native"] : technologies.slice(0, 3)).map(tech => <span key={tech} className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground">{tech}</span>)}</div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">{t.discoverProject} <ArrowUpRight aria-hidden="true" size={17} className="transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" /></span>
    </div>
  </Link>
);
};
