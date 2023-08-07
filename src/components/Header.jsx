import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { User, Briefcase, Clock, Mail } from "react-feather";

function Header({ handleThemeSwitch, theme }) {
  return (
    <header className="sticky top-0 z-10 mx-auto flex h-fit w-full items-center justify-center bg-gradient-to-r from-yellow-500 to-pink-500 text-center text-xs shadow-2xl shadow-stone-700/50 duration-100 dark:from-violet-900 dark:to-blue-700 dark:shadow-slate-950/50">
      <nav className="flex w-11/12 max-w-lg flex-row items-center justify-between gap-2 p-4 sm:max-w-3xl lg:max-w-4xl">
        <a
          className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 lg:gap-3"
          href="#intro"
        >
          <User className="scale-90 rounded-md transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-125 lg:active:scale-110" />
          <span className="hidden text-sm uppercase sm:inline lg:text-base">
            About Me
          </span>
        </a>
        <a
          className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 lg:gap-3"
          href="#portfolio"
        >
          <Briefcase className="scale-90 rounded-md transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-125 lg:active:scale-110" />
          <span className="hidden text-sm uppercase sm:inline lg:text-base">
            My Work
          </span>
        </a>
        <a
          className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 lg:gap-3"
          href="#timeline"
        >
          <Clock className="scale-90 rounded-md transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-125 lg:active:scale-110" />
          <span className="hidden text-sm uppercase sm:inline lg:text-base">
            My Journey
          </span>
        </a>
        <a
          className="flex items-center justify-center gap-2 opacity-50 hover:opacity-100 lg:gap-3"
          href="#contact"
        >
          <Mail className="scale-90 rounded-md transition-transform duration-100 active:scale-90 sm:scale-100 lg:scale-125 lg:active:scale-110" />
          <span className="hidden text-sm uppercase sm:inline lg:text-base">
            Contact Me
          </span>
        </a>
        <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} theme={theme} />
      </nav>
    </header>
  );
}

export default Header;
