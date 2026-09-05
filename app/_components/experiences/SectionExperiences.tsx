"use client";
import { dictionaries, type LocaleProps } from "@/lib/i18n";


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

export const SectionExperiences = ({ locale = "fr" }: LocaleProps) => {
  const t = dictionaries[locale];
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const neuralixDescriptionPoints = t.neuralixPoints;
  const spinforeatDescriptionPoints = t.spinforeatPoints;

  return (
    <Section id="parcours" className="flex flex-col gap-4" title={t.experience} rotate="rotate-90" position="-left-20">
      <Title title={t.experience} />
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
                startingDate={t.neuralixStart}
                endingDate={t.busy}
                role={t.fullStackRole}
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
                startingDate={t.spinStart}
                endingDate={t.spinEnd}
                role={t.frontendRole}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
