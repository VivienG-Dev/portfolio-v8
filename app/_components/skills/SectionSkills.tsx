"use client";
import { dictionaries, type LocaleProps } from "@/lib/i18n";


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

export const SectionSkills = ({ locale = "fr" }: LocaleProps) => {
  const t = dictionaries[locale];
  const reduceMotion = useReducedMotion();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section className="flex flex-col items-start gap-4" title={t.skills} rotate="-rotate-90" position="-right-20">
      <Title title={t.skills} />
      <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <motion.div
          className="flex"
          variants={createVariants(0)}
          transition={reduceMotion ? { duration: 0 } : undefined}
          initial={reduceMotion ? false : "hidden"}
          animate={reduceMotion || isInView ? "visible" : "hidden"}
        >
          <Skills
            title={t.skill0Title}
            description={t.skill0Description}
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
            title={t.skill1Title}
            description={t.skill1Description}
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
            title={t.skill2Title}
            description={t.skill2Description}
            technologies={["Docker", "Coolify", "Cloudflare R2", "Sharp", "Git"]}
          />
        </motion.div>
      </div>
    </Section>
  );
};
