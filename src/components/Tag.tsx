import React, { ReactNode } from "react";

function Tag(props : {className : string, text : string}) {
  return (
    <span className={`${props.className} rounded-full px-2`}>
      {props.text}   
    </span>
  );
}

export default Tag;
