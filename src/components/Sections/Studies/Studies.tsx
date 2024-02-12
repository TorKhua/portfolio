import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";
import Tag from "@/components/Tag";

function Studies() {
  const estudios = [
    {
      cargo: "Sistemas Microinformáticos y Redes",
      empresa: "IES Poeta Pacó Mollá",
      tiempo: "2019-2021",
      funciones: [{ descripcion: "" }],
      iconos: (
        <>
          <Tag text="Nextjs" className="bg-purple" />
        </>
      ),
    },
    {
      cargo: "Desarrollo de Aplicaciones Web",
      empresa: "IES Poeta Pacó Mollá",
      tiempo: "2021-2023",
      funciones: [{ descripcion: "" }],
    },
    
  ];

  return (
    <Section title="Estudios">
      {/*  <Timeline
        cargo="Sistemas Microinformáticos y Redes"
        empresa="IES Poeta Pacó Mollá"
        tiempo="2019-2021"
        funciones={[{ descripcion: "" }]}
      ></Timeline>
      <Timeline
        cargo="Desarrollo de Aplicaciones Web"
        empresa="IES Poeta Pacó Mollá"
        tiempo="2021-2023"
        funciones={[{ descripcion: "" }]}
      >
        <div className="py-2 flex flex-wrap gap-3"></div>
      </Timeline> */}

      {estudios.map((item, index) => (
        <Timeline
          key={index}
          cargo={item.cargo}
          empresa={item.empresa}
          tiempo={item.tiempo}
          funciones={item.funciones}
          ultima={index===estudios.length-1}
        >
          {item.iconos}
        </Timeline>
      ))}
    </Section>
  );
}

export default Studies;
