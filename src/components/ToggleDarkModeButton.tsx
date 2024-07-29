"use client";
import React, { SyntheticEvent } from "react";
import { useTheme } from "next-themes";
import { IoMoon, IoSunny } from "react-icons/io5";

function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (event: SyntheticEvent) => {
    event.stopPropagation();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button
        id="themeChanger"
        aria-label="Change theme"
        className={`cursor-pointer transition-all duration-700 ease-in-out`}
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <IoSunny className="w-6 h-6" />
        ) : (
          <IoMoon className="w-6 h-6" />
        )}{" "}
      </button>
    </div>
  );
}

export default ToggleDarkModeButton;
