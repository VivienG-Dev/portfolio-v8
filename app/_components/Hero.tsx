"use client";

import React, { useRef } from "react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { File } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div className="w-full min-h-[calc(100vh-68px)] md:h-[calc(100dvh-68px)] bg-gray-200">
      <Section className="flex flex-col xl:flex-row justify-center items-center h-[75vh] md:h-full">
        <motion.div
          ref={ref}
          className="flex-1 order-2 xl:order-1 flex flex-col xl:justify-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            className="text-center lg:text-left text-4xl lg:text-5xl font-bold mb-2 text-customGold"
            variants={itemVariants}
          >
            VIVIENG
          </motion.h2>
          <motion.h3
            className="text-center lg:text-left text-lg lg:text-1xl mb-4 text-gray-600"
            variants={itemVariants}
          >
            Développeur Web Full Stack
          </motion.h3>
          <motion.p className="mb-6 text-gray-700 text-justify" variants={itemVariants}>
            Développeur Web Full Stack passionné par la création d&#39;applications web innovantes de A à Z. Expertise
            en Vue 3, Nuxt, développement d&#39;APIs, et autres technologies modernes. Capable de transformer des
            concepts en solutions fonctionnelles et intuitives.
          </motion.p>
          <motion.div className="text-center lg:text-left" variants={itemVariants}>
            <Button className="gap-2 inline-flex" asChild>
              <Link href="https://www.vivieng.com/images/CV_Grenier_Vivien_2024.pdf">
                VOIR MON CV
                <File className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 order-1 xl:order-2 flex items-end justify-center lg:justify-end h-full"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <picture>
            <source media="(max-width: 1200px)" srcSet="/vivieng-hero-small.jpg" />
            <Image
              src="/vivieng-hero-big.png"
              alt="Vivien Grenier"
              width={1000}
              height={1500}
              priority
              unoptimized
              className="w-auto h-40 xl:h-[80vh] xl:max-h-[80vh] 2xl:h-[70vh] 2xl:max-h[70vh] max-w-none object-cover rounded-full xl:rounded-none"
            />
          </picture>
        </motion.div>
      </Section>
    </div>
  );
};
