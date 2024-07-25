import { Section } from "./Section";
import { ContactCard } from "./ContactCard";
import { AtSign } from "lucide-react";
import { Title } from "./Title";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";

export const Contact = () => {
  return (
    <Section className="flex flex-col gap-4">
      <Title title="Contact" />
      <div className="flex flex-col md:flex-row items-start gap-4">
        <div className="flex-1 w-full">
          <ContactCard
            title="grenier.vivien@proton.com"
            description="Me contacter par mail."
            url="mailto:grenier.vivien@proton.com"
            Icon={AtSign}
          />
        </div>
        <div className="flex-1 w-full">
          <ContactCard
            title="Vivien Grenier"
            description="Me contacter sur LinkedIn."
            url="https://www.linkedin.com/in/vivien-grenier/"
            Icon={LinkedInIcon}
          />
        </div>
        <div className="flex-1 w-full">
          <ContactCard
            title="VivienG-Dev"
            description="Voir mes projets sur Github."
            url="https://github.com/VivienG-Dev"
            Icon={GithubIcon}
          />
        </div>
      </div>
    </Section>
  );
};
