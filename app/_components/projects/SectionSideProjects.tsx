"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Section } from "../Section";
import { SideProject } from "./SideProject";
import { Title } from "../Title";
import { getAllProjects } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { BreadcrumbComponent } from "./Breadcrumb";
import { motion, useInView } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const SectionSideProjects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });
  const pathname = usePathname();
  const isIndexPage = pathname === "/";
  const projects = isIndexPage ? getAllProjects().filter((project) => project.featured) : getAllProjects();

  return (
    <Section className="flex flex-col gap-4" title="Side Projects" rotate="-rotate-90" position="-right-20">
      {!isIndexPage && <BreadcrumbComponent />}
      <Title title="Side Projects" />
      <motion.div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={itemVariants}>
            <SideProject {...project} />
          </motion.div>
        ))}
      </motion.div>
      {isIndexPage && (
        <Link className="text-primary text-center" href="/projects">
          <Button variant="link">Voir tous les projets</Button>
        </Link>
      )}
    </Section>
  );
};
