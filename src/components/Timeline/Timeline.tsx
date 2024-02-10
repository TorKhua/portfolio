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
    <div className="flex gap-5">
      <div className="flex flex-col align-middle items-center px-2">
        <a className="inline-block rounded-full w-5 h-5 bg-l_fg dark:bg-d_fg"></a>
        <div className="h-full bordzer-solid border-l-2 bg-l_fg dark:bg-d_fg"></div>
      </div>

      <div className="pb-6">
        <TimelineSection
          tiempo={props.tiempo}
          empresa={props.empresa}
          cargo={props.cargo}
          funciones={props.funciones}
        />
      </div>
    </div>
  );
}

export default Timeline;
