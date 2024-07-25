import { Section } from "../Section";
import { Title } from "../Title";
import { Skills } from "./Skills";

export const SectionSkills = () => {
  return (
    <Section className="flex flex-col items-start gap-4" title="Compétences" rotate="rotate-90" position="-left-20">
      <Title title="Compétences" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Skills
          title="Front-end"
          description="Pour le front-end, mon framework principale reste Vue.js en utilisant la Composition API. Je travaille également avec Nuxt.js mais il m'arrive de travailler avec Next.js !"
          technologies={["Vue.js", "Nuxt.js", "Next.js", "Composition API"]}
        />
        <Skills
          title="Back-end"
          description="Pour le back-end, j'utilise des technologies comme Node.js associée à Express. J'utilise MySQL ou PostgreSQL pour la base de données."
          technologies={["Node.js", "Express", "MySQL", "PostgreSQL"]}
        />
        <Skills
          title="Design"
          description="Pour le design, j'adore utiliser TailwindCSS. Je peux évidemment aussi utiliser SASS au besoin. J'utilise aussi Figma pour les maquettes."
          technologies={["TailwindCSS", "SASS", "Figma"]}
        />
      </div>
    </Section>
  );
};
