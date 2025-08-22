"use client";

import React, { useRef } from "react";
import { Section } from "../Section";
import { Title } from "../Title";
import { Skills } from "./Skills";
import { motion, useInView } from "framer-motion";

const createVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

export const SectionSkills = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section className="flex flex-col items-start gap-4" title="Compétences" rotate="rotate-90" position="-left-20">
      <Title title="Compétences" />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <motion.div
          className="flex"
          variants={createVariants(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Front-end"
            description="Spécialisé en Vue.js et la Composition API, je conçois des interfaces modernes et performantes. J’utilise principalement Nuxt.js pour mes projets personnels, tout en travaillant actuellement avec Angular et en développant progressivement mon expérience sur Next.js et l’écosystème React."
            technologies={["Vue.js", "Nuxt.js", "Angular", "Next.js", "TypeScript", "Composition API"]}
          />
        </motion.div>
        <motion.div
          className="flex"
          variants={createVariants(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Back-end"
            description="Expérience en développement back-end avec Node.js, utilisant NestJS et Express pour créer des APIs RESTful. Familier avec la gestion de bases de données relationnelles MySQL et PostgreSQL."
            technologies={["Node.js", "NestJS", "Express", "MySQL", "PostgreSQL", "REST API"]}
          />
        </motion.div>
        <motion.div
          className="flex"
          variants={createVariants(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Outils & Design"
            description="Maîtrise de TailwindCSS pour des interfaces modernes et responsives. Utilisation de Figma pour la conception et SASS pour des styles plus complexes. Expérience avec les outils de développement modernes."
            technologies={["TailwindCSS", "SASS", "Figma", "Git", "Docker"]}
          />
        </motion.div>
      </div>
    </Section>
  );
};
