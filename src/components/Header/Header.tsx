import Image from "next/image";
import React from "react";
import logo from "/public/logo.jpg";

function Header() {
  return (
    <div className="flex flex-wrap gap-4 justify-center align-middle my-10">
      <div>
        <div className="w-32 h-32 rounded-full border-solid border-l_fg2 dark:border-d_fg2 border-4">
          <Image
            src={logo}
            alt="Foto de Alejandro Torcuato"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="flex flex-col align-middle justify-center">
        <p className="text-4xl">
          <span className="text-orange">alejandro</span>
          <span className="text-blue">(</span>
          <span className="text-aqua">tm</span>
          <span className="text-blue">)</span>;
        </p>
        <p className="text-xl">Desarrollador Web</p>
        {/* ICONOS */}
        <div></div>
      </div>
    </div>
  );
}

export default Header;
