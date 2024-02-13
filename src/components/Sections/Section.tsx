import React, { ReactNode } from "react";
import Title from "./Title";

function Section(props: {
  title: string;
  icon?: ReactNode;
  children?: ReactNode;
  id ?: string;
}) {
  return (
    <section id={props.id} className="pb-8">
      <Title title={props.title}/>
      <div>{props.children}</div>
    </section>
  );
}

export default Section;
