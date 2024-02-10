import React, { ReactNode } from "react";
import TimelineSection from "./TimelineSection";

function Timeline(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: {descripcion : string}[];
  icono?: ReactNode
}) {
  return (
    <>
      <div>
        <a className="rounded-full w-6 h-6 bg-red"></a>
      </div>
      <div>
        <TimelineSection
          tiempo={props.tiempo}
          empresa={props.empresa}
          cargo={props.cargo}
          funciones={props.funciones}
        />
      </div>
    </>
  );
}

export default Timeline;
