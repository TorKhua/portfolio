import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";
import Tag from "@/components/Tag";

function Experience() {


  return (
    <Section title="Experiencia">
      <Timeline
        cargo="jefe"
        empresa="tecnotac"
        tiempo="2012-2013"
        funciones={[{ descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora quis nobis? Non dolor illo nam consectetur voluptas, voluptatem id praesentium rerum at, laborum dolorum facilis atque architecto vero perferendis! Dicta repellendus totam asperiores cum recusandae mollitia non sint quam fuga accusamus quaerat eius at facere quisquam, magni aut dolor odit aspernatur, rerum sit excepturi praesentium nisi illum!" }, { descripcion: "hola" }]}
      >
        <div className="py-2 flex flex-wrap gap-3">

        <Tag text='FireBird' className="bg-l_orange dark:bg-d_orange"/>
        <Tag text='TypeScript' className="bg-l_blue dark:bg-d_blue"/>
        <Tag text='Delphi' className="bg-l_red dark:bg-d_red"/>
        <Tag text='IBExpert' className="bg-l_green dark:bg-d_green"/>
        <Tag text='FireBird' className="bg-l_purple dark:bg-d_purple"/>
        <Tag text='FireBird' className="bg-l_aqua dark:bg-d_aqua"/>
        
        <Tag text='FireBird' className="dark:bg-l_orange bg-d_orange"/>
        <Tag text='TypeScript' className="dark:bg-l_blue bg-d_blue"/>
        <Tag text='Delphi' className="dark:bg-l_red bg-d_red"/>
        <Tag text='IBExpert' className="dark:bg-l_green bg-d_green"/>
        <Tag text='FireBird' className="dark:bg-l_purple bg-d_purple"/>
        <Tag text='FireBird' className="dark:bg-l_aqua bg-d_aqua"/>
      </div>
      </Timeline>
      <Timeline
        cargo="jefe"
        empresa="tecnotac"
        tiempo="2012-2013"
        funciones={[{ descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora quis nobis? Non dolor illo nam consectetur voluptas, voluptatem id praesentium rerum at, laborum dolorum facilis atque architecto vero perferendis! Dicta repellendus totam asperiores cum recusandae mollitia non sint quam fuga accusamus quaerat eius at facere quisquam, magni aut dolor odit aspernatur, rerum sit excepturi praesentium nisi illum!" }, { descripcion: "hola" }]}
      ></Timeline>
    </Section>
    
  );
}

export default Experience;
