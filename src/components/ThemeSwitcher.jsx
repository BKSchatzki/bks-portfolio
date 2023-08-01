import React from "react";
import { Moon, Sun } from "react-feather";

function ThemeSwitcher({ theme, handleThemeSwitch }) {
  return (
    <button
      className="rounded-md text-lg transition-transform duration-100 active:scale-90"
      onClick={handleThemeSwitch}
      type="button"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeSwitcher;
