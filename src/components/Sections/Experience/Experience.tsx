import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";
import Tag from "@/components/Tag";

function Experience() {
  const trabajo = [
    {
      cargo: "Soporte Técnico",
      empresa: "NeoFranquicias",
      tiempo: "03/2021 - 06/2021",
      funciones: [],
      iconos: (
        <>
          <Tag text="HTML" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="CSS" className="dark:bg-l_blue bg-d_blue" />
          <Tag text="Prestashop" className="dark:bg-l_purple bg-d_purple" />
          <Tag text="Wordpress" className="dark:bg-l_blue bg-d_blue" />
        </>
      ),
    },
    {
      cargo: "Desarrollador Multiplataforma",
      empresa: "Tecnotac S.L.U.",
      tiempo: "03/2023 - actual",
      funciones: [
        { descripcion: "Desarrollo del ERP." },
        { descripcion: "Gestión de la base de datos." },
        { descripcion: "Migración del programa de Visual Fox Pro a Delphi." },
        { descripcion: "Mantenimiento de equipos." },
        { descripcion: "Instalación de sistemas operativos." },
      ],
      iconos: (
        <>
          <Tag text="FireBird" className="dark:bg-l_orange bg-d_orange" />
          <Tag text="Delphi" className="dark:bg-l_red bg-d_red" />
          <Tag text="IBExpert" className="dark:bg-l_green bg-d_green" />
        </>
      ),
    },
  ];
  return (
    <Section title="Experiencia">
      {trabajo.map((item, index) => (
        <Timeline
          key={index}
          cargo={item.cargo}
          empresa={item.empresa}
          tiempo={item.tiempo}
          funciones={item.funciones}
          ultima={index === trabajo.length - 1}
        >
          {item.iconos}
        </Timeline>
      ))}
    </Section>
  );
}

export default Experience;
