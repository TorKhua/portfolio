import React from "react";
import Section from "../Section";
import Tag from "@/components/Tag";

function Skills() {
  return (
    <Section title="Habilidades">
      <div className="flex flex-wrap gap-4 mb-4">
        <Tag text="React" className="dark:bg-l_blue bg-d_blue text-xl" />
        <Tag text="MongoDB" className="dark:bg-l_green bg-d_green text-xl" />
      </div>
      <div className="flex flex-wrap justify-left gap-4">
        <Tag text="Node" className="dark:bg-l_orange bg-d_orange" />
        <Tag text="Docker" className="dark:bg-l_blue bg-d_blue" />
        <Tag text="Express" className="dark:bg-l_red bg-d_red" />
        <Tag text="NextJs" className="dark:bg-l_green bg-d_green" />
        <Tag text="Git" className="dark:bg-l_purple bg-d_purple" />
        <Tag text="AWS" className="dark:bg-l_aqua bg-d_aqua" />
        <Tag text="Firebase" className="dark:bg-l_aqua bg-d_aqua" />
        <Tag text="PHP" className="dark:bg-l_aqua bg-d_aqua" />
        <Tag text="Bootstrap" className="dark:bg-l_aqua bg-d_aqua" />
        <Tag text="Java" className="dark:bg-l_aqua bg-d_aqua" />
        <Tag text="Javascript" className="dark:bg-l_aqua bg-d_aqua" />
      </div>
    </Section>
  );
}

export default Skills;
