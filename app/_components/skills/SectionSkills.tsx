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
          className="h-full flex"
          variants={createVariants(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Front-end"
            description="Pour le front-end, mon framework principale reste Vue.js en utilisant la Composition API. Je travaille également avec Nuxt.js mais il m'arrive de travailler avec Next.js !"
            technologies={["Vue.js", "Nuxt.js", "Next.js", "Composition API"]}
          />
        </motion.div>
        <motion.div
          className="h-full flex"
          variants={createVariants(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Back-end"
            description="Pour le back-end, j'utilise des technologies comme Node.js associée à Express. J'utilise MySQL ou PostgreSQL pour la base de données."
            technologies={["Node.js", "Express", "MySQL", "PostgreSQL"]}
          />
        </motion.div>
        <motion.div
          className="h-full flex"
          variants={createVariants(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Design"
            description="Pour le design, j'adore utiliser TailwindCSS. Je peux évidemment aussi utiliser SASS au besoin. J'utilise aussi Figma pour les maquettes."
            technologies={["TailwindCSS", "SASS", "Figma"]}
          />
        </motion.div>
      </div>
    </Section>
  );
};
