import React from "react";
import Section from "../Section";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <Section title="Proyectos">
      <div className="flex flex-wrap gap-6">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  );
}

export default Projects;
