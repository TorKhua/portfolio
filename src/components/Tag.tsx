import React, { ReactNode } from "react";

function Tag(props : {className : string, text : string}) {
  return (
    <a className={`${props.className} rounded-full px-2`}>
      {props.text}   
    </a>
  );
}

export default Tag;
