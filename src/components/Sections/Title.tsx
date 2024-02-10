import React, { ReactNode } from "react";

function Title(props: { title: string; icon?: ReactNode }) {
  return (
    <header className="text-2xl flex items-center gap-3 pb-4 font-bold">
      <h2>{props.title}</h2> <div>{props.icon}</div>
    </header>
  );
}

export default Title;
