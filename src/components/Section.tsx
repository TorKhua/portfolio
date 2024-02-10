import React, { ReactNode } from 'react'
import Title from './Title';

function Section(props : {title : string, children : ReactNode}) {
  return (
    <section className="pb-8">
      <Title title={props.title} />
      <div>
        {props.children}  
      </div>
    </section>
  );
}

export default Section