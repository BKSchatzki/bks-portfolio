import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";
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
      <ThemeSwitcher handleThemeSwitch={handleThemeSwitch} theme={theme} />
      <div className="min-h-screen bg-white font-inter text-stone-900 dark:bg-stone-900 dark:text-stone-300">
        <div className="mx-auto w-11/12 max-w-5xl">
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
