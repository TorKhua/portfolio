'use client'
import Image from "next/image";
import React from "react";
import logo from "/public/logo.jpg";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full">
      <div className="bg-bg">
        <div className="w-52 h-52 rounded-full border-solid border-red border-4">
          <Image
            src={logo}
            alt="Foto de Alejandro Torcuato"
            className="rounded-full"
          />
        </div>
        <div>
          The current theme is: {theme}
          <button onClick={() => setTheme("light")}>Light Mode</button>
          <button onClick={() => setTheme("dark")}>Dark Mode</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Header;
