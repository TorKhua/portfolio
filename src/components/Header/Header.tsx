"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "/public/logo.jpg";
import ToggleDarkModeButton from "../ToggleDarkModeButton";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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
            isScrolled ? "py-4" : "flex-col md:flex-row my-10"
          } flex gap-4 justify-center items-center`}
        >
          <div>
            <div
              className={`${
                isScrolled ? "w-10 h-10" : "w-32 h-32"
              } rounded-full border-solid border-l_fg2 dark:border-d_fg2 border-2 transition-all duration-500`}
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
      <div className="max-w-3xl mt-[400px]"></div>
    </>
  );
}

export default Header;
