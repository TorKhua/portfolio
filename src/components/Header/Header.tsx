"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/logo.png";
import ToggleDarkModeButton from "../ToggleDarkModeButton";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
      
        className={`${
          isScrolled ? "flex flex-row-reverse justify-between items-center" : ""
        } fixed w-full top-0 max-w-3xl px-5 dark:bg-d_bg bg-l_bg_h`}
      >
        <div className="w-full py-4 flex items-center justify-end">
          <ToggleDarkModeButton />
        </div>
        {/* Section Header Photo + Name */}
        <div
          className={`${
            isScrolled ? "py-4 gap-4" : "flex-col sm:flex-row my-10 gap-8"
          } flex  justify-center items-center`}
        >
          <div>
            <div
              className={`${
                isScrolled ? "w-10 h-10 border-2" : "w-52 h-52 border-4"
              } rounded-full border-solid border-l_fg2 dark:border-d_fg2 dark:bg-aqua bg-aqua  transition-all duration-500`}
            >
              <Image
                src={logo}
                alt="Foto de Alejandro Torcuato"
                className="rounded-full"
              />
            </div>
          </div>

          <div className="flex flex-col align-middle justify-center">
            <p className={`${isScrolled ? "text-base" : "text-4xl"} `}>
              <span className="text-orange">alejandro</span>
              <span className="text-blue">(</span>
              <span className="text-aqua">tm</span>
              <span className="text-blue">)</span>;
            </p>
            <p className={`${isScrolled ? "hidden" : "text-xl"} py-2`}>
              Desarrollador Web
            </p>
            {/* ICONOS */}
            <div className={`${isScrolled ? "hidden" : "text-xl"} flex flex-row gap-4 `}>
              <FaLinkedinIn href="" />
              <FaGithub />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl"></div>
    </>
  );
}

export default Header;
