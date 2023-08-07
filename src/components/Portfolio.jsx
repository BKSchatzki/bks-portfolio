import React, { useEffect, useState } from "react";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import { CSSTransition } from "react-transition-group";
import "../styles/transitions.css";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(portfolio[0]);
  useEffect(() => {}, [activeTab]);

  return (
    <section
      className="my-8 flex scroll-m-24 flex-col items-center justify-center sm:my-16 lg:my-24"
      id="portfolio"
    >
      <Title>Projects</Title>
      <div className="w-full">
        <div className="mb-4 flex flex-row flex-wrap items-center justify-center gap-4 py-0 sm:mb-5 sm:gap-5 lg:mb-6 lg:gap-6">
          {portfolio.map((item, index) => (
            <button
              aria-selected={activeTab === item}
              className={`${
                activeTab?.title === item.title
                  ? "bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-violet-700 dark:to-blue-700"
                  : "bg-stone-50/75 dark:bg-slate-900/75"
              }  w-fit rounded-lg px-4 py-2 text-xs font-semibold shadow-lg shadow-stone-700/50 transition-transform duration-100 active:scale-90 dark:shadow-slate-950/30 sm:px-5 sm:py-[0.625rem] sm:text-sm lg:px-6 lg:py-3 lg:text-base`}
              key={index}
              onClick={() => setActiveTab(item)}
              role="tab"
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {portfolio.map((item, index) => (
            <CSSTransition
              classNames="portfolio-item"
              in={activeTab && activeTab.title === item.title}
              key={index}
              timeout={500}
              unmountOnExit
            >
              <PortfolioItem
                activeTab={activeTab && activeTab.title === item.title}
                description={item.description}
                imgUrl={item.imgUrl}
                link={item.link}
                repo={item.repo}
                stack={item.stack}
                title={item.title}
              />
            </CSSTransition>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
