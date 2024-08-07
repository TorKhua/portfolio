import React from "react";
import Section from "../Section";
import ProjectCard from "@/components/ProjectCard";
import RoundedTag from "@/components/RoundedTag";
import { SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
import Image from "next/image";
import imgSerode from '/public/serode.svg';

function Projects() {
  const projects = [
    {
      title: "Serode",
      description: "El gestor de tareas social",
      icons: (
        <>
          <RoundedTag icon={<SiReact />} />
          <RoundedTag icon={<SiNodedotjs />} />
          <RoundedTag icon={<SiMongodb />} />
        </>
      ),
      image: (
        <Image
          src={imgSerode}
          alt="Foto de Alejandro Torcuato"
          className="max-w-72 filter sepia grayscale"
        />
      ),
    },
  ];
  return (
    <Section title="Proyectos">
      <div className="flex flex-wrap gap-6">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              title={project.title}
              description={project.description}
              icons={project.icons}
              image={project.image}
              key={index}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
