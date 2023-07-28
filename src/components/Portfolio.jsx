import React, { useEffect, useState } from "react";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Tab() {
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {}, [activeTab]);

  return (
    <section className="flex flex-col items-center justify-center">
      <Title className="mb-4 text-2xl font-bold">My Projects</Title>
      <div className="w-full">
        <div className="mb-4 grid grid-cols-3 place-items-center gap-4 py-1">
          {portfolio.map((item, index) => (
            <button
              aria-selected={activeTab === item}
              className={`${
                activeTab?.title === item.title
                  ? "bg-gradient-to-r from-yellow-500 to-pink-500"
                  : "bg-slate-50"
              }  w-full rounded-lg py-2 font-semibold shadow-lg`}
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
