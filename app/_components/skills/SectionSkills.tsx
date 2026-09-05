"use client";

import React, { useRef } from "react";
import { Section } from "../Section";
import { Title } from "../Title";
import { Skills } from "./Skills";
import { motion, useInView, useReducedMotion } from "framer-motion";

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
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section className="flex flex-col items-start gap-4" title="Compétences" rotate="-rotate-90" position="-right-20">
      <Title title="Compétences" />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <motion.div
          className="flex"
          variants={createVariants(0)}
          transition={reduceMotion ? { duration: 0 } : undefined}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Web & mobile"
            description="Je conçois des interfaces avec Vue et Nuxt, et je travaille avec Angular en contexte professionnel. Je développe également mes compétences en React Native et Expo à travers l’application mobile Manga Hive."
            technologies={["Vue.js", "Nuxt", "Angular", "TypeScript", "React Native", "Expo"]}
          />
        </motion.div>
        <motion.div
          className="flex"
          variants={createVariants(0.2)}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Back-end & données"
            description="Je développe des API avec NestJS et PostgreSQL : authentification, règles métier et gestion des données. Sur Manga Hive, j’utilise Prisma, Redis et BullMQ pour relier le catalogue, le cache et les traitements en arrière-plan."
            technologies={["Node.js", "NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ"]}
          />
        </motion.div>
        <motion.div
          className="flex"
          variants={createVariants(0.4)}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
        >
          <Skills
            title="Mise en production"
            description="Je déploie et maintiens Manga Hive sur un VPS avec Coolify, en séparant les environnements de prévisualisation et de production. Je prends aussi en charge l’optimisation des images et leur stockage sur Cloudflare R2, puis les corrections et les évolutions du produit."
            technologies={["Docker", "Coolify", "Cloudflare R2", "Sharp", "Git"]}
          />
        </motion.div>
      </div>
    </Section>
  );
};
