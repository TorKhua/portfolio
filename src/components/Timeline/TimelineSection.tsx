import { Key } from "lucide-react";
import React, { ReactNode } from "react";

function TimelineSection(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: {descripcion : string}[];
  children : ReactNode
}) {
  return (
    <div>
      <p >{props.tiempo}</p>
      <p className="font-bold">{props.empresa}</p>
      <p>{props.cargo}</p>
      <ul>
        {props.funciones.map((item, index) => (
         <li key={index}>{item.descripcion}</li>
      ))}
      </ul>
      <div>
      {props.children}
      </div>
    </div>
  );
}

export default TimelineSection;
