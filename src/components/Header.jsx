import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ArrowUp, Briefcase, Clock, Mail } from "react-feather";

function Header({ handleThemeSwitch, theme }) {
  return (
    <header className="sticky top-4 z-10 mx-auto h-fit w-11/12 rounded-xl bg-gradient-to-r from-yellow-500 to-pink-500 text-center text-xs shadow-2xl duration-100 dark:bg-gradient-to-l">
      <nav className="flex flex-row items-center justify-between gap-2 p-4">
        <a href="#intro">
          <ArrowUp className="rounded-md text-lg transition-transform duration-100 active:scale-90" />
        </a>
        <a href="#portfolio">
          <Briefcase className="rounded-md text-lg transition-transform duration-100 active:scale-90" />
        </a>
        <a href="#timeline">
          <Clock className="rounded-md text-lg transition-transform duration-100 active:scale-90" />
        </a>
        <a href="#contact">
          <Mail className="rounded-md text-lg transition-transform duration-100 active:scale-90" />
        </a>
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </nav>
    </header>
  );
}

export default Header;
