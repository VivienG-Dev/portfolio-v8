"use client";

import React, { useRef } from "react";
import { Section } from "../Section";
import { Title } from "../Title";
import { Card } from "@/components/ui/card";
import { SingleProject } from "./SingleProject";
import { getProjectById } from "@/lib/projects";
import { BreadcrumbComponent } from "./Breadcrumb";
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

interface SectionSingleProjectProps {
  projectId: string;
}

export const SectionSingleProject = ({ projectId }: SectionSingleProjectProps) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const project = getProjectById(projectId);

  const renderProjectContent = () => {
    if (!project) {
      return <div>Project not found</div>;
    }
    return <SingleProject project={project} />;
  };

  return (
    <Section className="flex flex-col gap-4" title="Side Projects" rotate="-rotate-90" position="-right-20">
      <BreadcrumbComponent projectId={projectId} />
      <Title title="Project Details" />
      <motion.div
        ref={containerRef}
        className="flex-1"
        variants={createVariants(0)}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <Card className="flex flex-col flex-wrap gap-4 p-4">{renderProjectContent()}</Card>
      </motion.div>
    </Section>
  );
};
