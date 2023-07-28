import React, { useEffect, useState } from "react";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Tab() {
  const [activeTab, setActiveTab] = useState(portfolio[0]);
  useEffect(() => {}, [activeTab]);

  return (
    <section
      className="my-16 flex scroll-m-24 flex-col items-center justify-center"
      id="portfolio"
    >
      <Title>My Projects</Title>
      <div className="w-full">
        <div className="mb-4 flex flex-row flex-wrap items-center justify-center gap-4 py-0">
          {portfolio.map((item, index) => (
            <button
              aria-selected={activeTab === item}
              className={`${
                activeTab?.title === item.title
                  ? "bg-gradient-to-r from-yellow-500 to-pink-500 dark:from-pink-700 dark:to-yellow-700"
                  : "bg-slate-50 dark:bg-neutral-900"
              }  w-fit rounded-lg px-4 py-2 text-sm font-semibold shadow-lg transition-transform duration-100 active:scale-90 dark:shadow-neutral-900`}
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
            <PortfolioItem
              activeTab={activeTab && activeTab.title === item.title}
              imgUrl={item.imgUrl}
              key={index}
              link={item.link}
              stack={item.stack}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tab;
