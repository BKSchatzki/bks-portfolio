import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { ArrowUp, Briefcase, Clock, Mail } from "react-feather";

function Header({ handleThemeSwitch, theme }) {
  return (
    <header className="sticky top-0 z-10 mx-auto flex h-fit w-full items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 text-center text-xs shadow-2xl shadow-stone-700/50 duration-100 dark:from-violet-900 dark:to-blue-700 dark:shadow-slate-950/50">
      <nav className="flex w-11/12 max-w-3xl flex-row items-center justify-between gap-2 p-4">
        <a href="#intro">
          <ArrowUp className="scale-90 rounded-md text-lg transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-110 lg:active:scale-100" />
        </a>
        <a href="#portfolio">
          <Briefcase className="scale-90 rounded-md text-lg transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-110 lg:active:scale-100" />
        </a>
        <a href="#timeline">
          <Clock className="scale-90 rounded-md text-lg transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-110 lg:active:scale-100" />
        </a>
        <a href="#contact">
          <Mail className="scale-90 rounded-md text-lg transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-110 lg:active:scale-100" />
        </a>
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </nav>
    </header>
  );
}

export default Header;
