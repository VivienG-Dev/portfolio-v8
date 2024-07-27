"use client";

import React, { useRef } from "react";
import { Section } from "../Section";
import { ContactCard } from "./ContactCard";
import { AtSign } from "lucide-react";
import { Title } from "../Title";
import { GithubIcon } from "../icons/GithubIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
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

export const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <Section className="flex flex-col gap-4">
      <Title title="Contact" />
      <div ref={containerRef} className="flex flex-col md:flex-row items-start gap-4">
        <motion.div
          variants={createVariants(0)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 w-full"
        >
          <ContactCard
            title="grenier.vivien@proton.com"
            description="Me contacter par mail."
            url="mailto:grenier.vivien@proton.com"
            Icon={AtSign}
          />
        </motion.div>
        <motion.div
          variants={createVariants(0.2)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 w-full"
        >
          <ContactCard
            title="Vivien Grenier"
            description="Me contacter sur LinkedIn."
            url="https://www.linkedin.com/in/vivien-grenier/"
            Icon={LinkedInIcon}
          />
        </motion.div>
        <motion.div
          variants={createVariants(0.4)}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex-1 w-full"
        >
          <ContactCard
            title="VivienG-Dev"
            description="Voir mes projets sur Github."
            url="https://github.com/VivienG-Dev"
            Icon={GithubIcon}
          />
        </motion.div>
      </div>
    </Section>
  );
};
