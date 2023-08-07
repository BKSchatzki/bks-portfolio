import React from "react";
import { Moon, Sun } from "react-feather";

function ThemeSwitcher({ theme, handleThemeSwitch }) {
  return (
    <button
      className="scale-90 rounded-md text-lg opacity-50 transition-transform duration-100 hover:opacity-100 active:scale-90 sm:scale-100 lg:scale-125 lg:active:scale-110"
      onClick={handleThemeSwitch}
      type="button"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
