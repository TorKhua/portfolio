import React from "react";
import Section from "../Section";
import Timeline from "@/components/Timeline/Timeline";

function Experience() {


  return (
    <Section title="Experiencia">
      <Timeline
        cargo="jefe"
        empresa="tecnotac"
        tiempo="2012-2013"
        funciones={[{ descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora quis nobis? Non dolor illo nam consectetur voluptas, voluptatem id praesentium rerum at, laborum dolorum facilis atque architecto vero perferendis! Dicta repellendus totam asperiores cum recusandae mollitia non sint quam fuga accusamus quaerat eius at facere quisquam, magni aut dolor odit aspernatur, rerum sit excepturi praesentium nisi illum! Voluptatum, voluptatibus. Impedit voluptatum ipsum, aliquam aut labore expedita autem quo dolorum corrupti quaerat illo asperiores repellat quisquam, dolores, sint perspiciatis tempore aperiam error exercitationem eaque quos doloremque libero! Corporis, pariatur quam!" }, { descripcion: "hola" }]}
      ></Timeline>
      <Timeline
        cargo="jefe"
        empresa="tecnotac"
        tiempo="2012-2013"
        funciones={[{ descripcion: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem tempora quis nobis? Non dolor illo nam consectetur voluptas, voluptatem id praesentium rerum at, laborum dolorum facilis atque architecto vero perferendis! Dicta repellendus totam asperiores cum recusandae mollitia non sint quam fuga accusamus quaerat eius at facere quisquam, magni aut dolor odit aspernatur, rerum sit excepturi praesentium nisi illum! Voluptatum, voluptatibus. Impedit voluptatum ipsum, aliquam aut labore expedita autem quo dolorum corrupti quaerat illo asperiores repellat quisquam, dolores, sint perspiciatis tempore aperiam error exercitationem eaque quos doloremque libero! Corporis, pariatur quam!" }, { descripcion: "hola" }]}
      ></Timeline>
    </Section>
    
  );
}

export default Experience;
