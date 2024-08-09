import Link from "next/link";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { ModeToggle } from "@/components/mode-toggle";

export const Header = () => {
  return (
    <header className="sticky top-0 bg-white dark:bg-background py-4 z-50">
      <Section className="flex items-baseline justify-between">
        <h1 className="text-lg font-bold font text-customGold">
          <Link href="/">VIVIENG.COM</Link>
        </h1>
        <div className="flex-1">
          <nav className="flex-1 flex justify-end">
            <ul className="flex space-x-2">
              <li>
                <ModeToggle />
              </li>
              <li>
                <Link href="https://github.com/VivienG-Dev">
                  <Button className="gap-2" variant="outline" size="icon">
                    <GithubIcon size={16} />
                  </Button>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/vivien-grenier/">
                  <Button className="gap-2" variant="outline" size="icon">
                    <LinkedInIcon size={16} />
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Section>
    </header>
  );
};
