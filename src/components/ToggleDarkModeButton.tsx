"use client";
import React, { SyntheticEvent } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme();

  const handleTheme = (event: SyntheticEvent) => {
    event.stopPropagation();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div>
      <button className="cursor-pointer" onClick={handleTheme}>{theme === "light" ? <Sun /> : <Moon />} </button>
    </div>
  );
}

export default ToggleDarkModeButton;
