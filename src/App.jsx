import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className="min-h-screen font-inter text-stone-950 dark:text-slate-50">
        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <div className="mx-auto w-11/12 max-w-lg sm:max-w-3xl lg:max-w-4xl">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
