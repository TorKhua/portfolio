import { Key } from "lucide-react";
import React from "react";

function TimelineSection(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: {descripcion : string}[];
}) {
  return (
    <div>
      <p>{props.tiempo}</p>
      <p>{props.empresa}</p>
      <p>{props.cargo}</p>
      <ul>
        {props.funciones.map((item, index) => (
         <li key={index}>{item.descripcion}</li>
      ))}
      </ul>
    </div>
  );
}

export default TimelineSection;
