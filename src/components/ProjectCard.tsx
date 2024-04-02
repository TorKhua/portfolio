import React from "react";
import RoundedTag from "./RoundedTag";
import { SiGithub, SiGithubactions, SiGithubpages, SiGithubsponsors, SiNextdotjs, SiReact } from "react-icons/si";
import Image from "next/image";
import foto from "/public/logo.svg";

function ProjectCard() {
  return (
    <div className="w-full">
      {/* Parte arriba del header */}
      <div className="w-full flex gap-2 bg-l_bg4 dark:bg-d_bg2 p-3 rounded-t-xl">
        <span className="w-4 h-4 rounded-full dark:bg-l_red bg-d_red"></span>
        <span className="w-4 h-4 rounded-full dark:bg-l_yellow bg-d_yellow"></span>
        <span className="w-4 h-4 rounded-full dark:bg-l_green bg-d_green"></span>
      </div>

      {/* Contenido principal */}
      <div className="w-full bg-l_bg1 dark:bg-d_bg3 p-3 rounded-b-xl flex flex-wrap justify-between items-center gap-4">
        <div className="max-w-72">
          <h2 className="font-bold text-xl">Título del proyecto</h2>
          <p>Breve descripción del proyecto y en lo que consiste</p>
          <div className="flex flex-wrap my-3 gap-4 text-xl">
            <RoundedTag icon={<SiNextdotjs />} />
            <RoundedTag icon={<SiGithub />} />
          </div>
        </div>
        <div>
            <Image
              src={foto}
              alt="Foto de Alejandro Torcuato"
              className="max-w-72 rounded-xl"
            />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
