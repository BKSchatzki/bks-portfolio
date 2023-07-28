import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Header({ handleThemeSwitch, theme }) {
  return (
    <header className="shadow-2x sticky top-4 ms-auto h-fit w-fit rounded-2xl bg-slate-50 text-center text-xs opacity-60 transition-opacity duration-100 hover:opacity-100">
      <nav className="flex flex-row items-center justify-evenly gap-2 p-4">
        <a href="#intro">Top</a>
        <a href="#portfolio">Projects</a>
        <a href="#timeline">Journey</a>
        <a href="#contact">Contact</a>
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </nav>
    </header>
  );
}

export default Header;
