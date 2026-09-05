"use client";

import React, { useRef } from "react";
import { Section } from "../Section";
import { Card } from "@/components/ui/card";
import { Experiences } from "./Experiences";
import { Title } from "../Title";
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

export const SectionExperiences = () => {
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const neuralixDescriptionPoints = [
    "Développement d’applications médicales avec Angular, NestJS et PostgreSQL.",
    "Centralisation des règles métier côté serveur et tests automatisés des fonctionnalités critiques.",
    "Participation aux choix d’architecture et à la définition des spécifications avec l’équipe.",
  ];
  const spinforeatDescriptionPoints = [
    "Création de deux applications Vue 3 : fidélité par QR code, suivi des points et récompenses.",
    "Développement d’un site vitrine Nuxt pour un restaurant, avec un travail sur l’accessibilité et le SEO.",
    "Intégration de l’API interne en collaboration avec l’équipe back-end.",
  ];

  return (
    <Section id="parcours" className="flex flex-col gap-4" title="Expériences" rotate="rotate-90" position="-left-20">
      <Title title="Expériences" />
      <div ref={containerRef} className="flex flex-col md:flex-row gap-4">
        <motion.div
          variants={createVariants(0.1)}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
          className="w-full"
        >
          <Card className="flex flex-col p-4 h-full dark:border dark:border-customGold/30 dark:hover:border-customGold transition-all duration-300">
            <div className="flex-grow overflow-auto">
              <Experiences
                imageSrc="/neuralix.svg"
                title="Neuralix"
                descriptionPoints={neuralixDescriptionPoints}
                startingDate="Avril 2025"
                endingDate="Actuellement en poste"
                role="Développeur Full Stack"
              />
            </div>
          </Card>
        </motion.div>
        <motion.div
          variants={createVariants(0.2)}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
          className="w-full"
        >
          <Card className="flex flex-col p-4 h-full dark:border dark:border-customGold/30 dark:hover:border-customGold transition-all duration-300">
            <div className="flex-grow overflow-auto">
              <Experiences
                imageSrc="/spinforeat.svg"
                title="SpinforEat"
                descriptionPoints={spinforeatDescriptionPoints}
                startingDate="Août 2022"
                endingDate="Décembre 2023"
                role="Développeur front-end"
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
