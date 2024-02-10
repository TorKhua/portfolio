"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, SunDim } from "lucide-react";

function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <a className="cursor-pointer" onClick={handleTheme}>{theme === "light" ? <Sun /> : <Moon />}</a>
    </div>
  );
}

export default ToggleDarkModeButton;
