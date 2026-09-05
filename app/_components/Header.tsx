import Link from "next/link";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export const Header = () => (
  <header className="sticky top-0 z-50 border-b border-customGold/15 bg-background/95 backdrop-blur-md">
    <a href="#contenu" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">Aller au contenu</a>
    <Section className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
      <Link href="/" aria-label="Vivien Grenier — accueil">
        <Image src="/branding/logo-vivieng.svg" alt="vivieng.com" width={775} height={202} className="h-10 w-auto sm:h-12 dark:hidden" priority />
        <Image src="/branding/logo-vivieng-dark.svg" alt="vivieng.com" width={775} height={202} className="hidden h-10 w-auto sm:h-12 dark:block" priority />
      </Link>
      <nav aria-label="Navigation principale" className="order-3 flex w-full justify-center gap-6 text-sm font-medium sm:order-none sm:w-auto">
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href="/#projets">Projets</Link>
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href="/#parcours">Parcours</Link>
        <Link className="py-3 transition-colors hover:text-customGold-dark dark:hover:text-customGold" href="/#contact">Contact</Link>
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="ghost" size="icon"><Link href="https://github.com/VivienG-Dev" aria-label="Mon profil GitHub"><GithubIcon size={18} /></Link></Button>
        <Button asChild variant="ghost" size="icon"><Link href="https://www.linkedin.com/in/vivien-grenier/" aria-label="Mon profil LinkedIn"><LinkedInIcon size={18} /></Link></Button>
        <ModeToggle />
      </div>
    </Section>
  </header>
);
