import React, { ReactNode } from "react";

function TimelineSection(props: {
  tiempo: string;
  empresa: string;
  cargo: string;
  funciones: { descripcion: string }[];
  children: ReactNode;
}) {
  return (
    <div>
      <p>{props.tiempo}</p>
      <p className="font-bold">{props.empresa}</p>
      <p>{props.cargo}</p>
      {props.funciones.length > 0 && (
        <ul>
          {props.funciones.map((item, index) => (
            <li className="list-disc" key={index}>
              {item.descripcion}
            </li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-4">{props.children}</div>
    </div>
  );
}

export default TimelineSection;
