import { dictionaries, localizedPath, type LocaleProps } from "@/lib/i18n";
import Link from "next/link";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = ({ locale = "fr" }: LocaleProps) => {
  const t = dictionaries[locale];
  return (
  <header className="sticky top-0 z-50 border-b border-customGold/15 bg-background/95 backdrop-blur-md">
    <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">{t.skip}</a>
    <Section className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 py-3">
      <Link href={localizedPath("/", locale)} aria-label={t.homeLabel}>
        <Image src="/branding/logo-vivieng.svg" alt="vivieng.com" width={775} height={202} className="h-8 w-auto sm:h-12 dark:hidden" priority />
        <Image src="/branding/logo-vivieng-dark.svg" alt="vivieng.com" width={775} height={202} className="hidden h-8 w-auto sm:h-12 dark:block" priority />
      </Link>
      <nav aria-label={t.navigation} className="order-3 flex w-full justify-center gap-6 text-sm font-medium md:order-none md:w-auto">
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href={localizedPath("/", locale) + "#projets"}>{t.projects}</Link>
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href={localizedPath("/", locale) + "#parcours"}>{t.career}</Link>
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href={localizedPath("/", locale) + "#contact"}>{t.contact}</Link>
      </nav>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex"><Link href="https://github.com/VivienG-Dev" aria-label={t.githubProfile}><GithubIcon size={18} /></Link></Button>
        <Button asChild variant="ghost" size="icon" className="hidden sm:inline-flex"><Link href="https://www.linkedin.com/in/vivien-grenier/" aria-label={t.linkedinProfile}><LinkedInIcon size={18} /></Link></Button>
        <ModeToggle locale={locale} />
        <LanguageSwitcher locale={locale} />
      </div>
    </Section>
  </header>
);
};
