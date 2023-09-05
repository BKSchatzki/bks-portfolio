import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedSection from "./components/AnimatedSection";

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

  // Define animation delay for each section
  const sectionAnimationDelays = [0, 0.2, 0.4, 0.6, 0.8]; // Adjust delays as needed

  return (
    <>
      <div className="min-h-screen font-rubik text-stone-950 dark:text-slate-50">
        <Header handleThemeSwitch={handleThemeSwitch} theme={theme} />
        <div className="mx-auto w-11/12 max-w-lg snap-y snap-mandatory sm:max-w-3xl lg:max-w-4xl">
          {/* Map through each section and apply staggered animation */}
          {[Intro, Portfolio, Timeline, Contact, Footer].map(
            (Section, index) => (
              <AnimatedSection
                key={index}
                delay={sectionAnimationDelays[index]}
              >
                <Section />
              </AnimatedSection>
            ),
          )}
        </div>
      </div>
    </>
  );
}

export default App;
