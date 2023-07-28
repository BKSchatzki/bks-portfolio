import React, { useEffect, useState } from "react";
import Title from "./Title";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";

function Tab() {
  const [activeTab, setActiveTab] = useState(null);
  useEffect(() => {}, [activeTab]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Title className="mb-4 text-2xl font-bold">My Projects</Title>
      <div className="w-full">
        <div className="mb-4 grid grid-cols-3 place-items-center gap-4 py-1">
          {portfolio.map((item, index) => (
            <button
              key={index}
              className={`${
                activeTab?.title === item.title
                  ? "bg-gradient-to-r from-yellow-500 to-pink-500"
                  : "bg-slate-50"
              }  w-full rounded-lg py-2 font-semibold shadow-lg`}
              onClick={() => setActiveTab(item)}
              role="tab"
              aria-selected={activeTab === item}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          {portfolio.map((item, index) => (
            <PortfolioItem
              key={index}
              imgUrl={item.imgUrl}
              title={item.title}
              stack={item.stack}
              link={item.link}
              activeTab={activeTab && activeTab.title === item.title}
            />
            // <div
            //   key={index}
            //   className={`relative flex h-fit w-full flex-col rounded-md p-7 shadow-2xl ${
            //     activeTab?.title === item.title
            //       ? "flex flex-col items-center justify-start"
            //       : "hidden"
            //   }`}
            // >
            //   <div>
            //     <img src={item.imgUrl} alt={item.title} />
            //   </div>
            //   <h1 className="py-3 text-2xl font-semibold">{item.title}</h1>
            //   <p className="text-lg">{item.stack}</p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tab;
