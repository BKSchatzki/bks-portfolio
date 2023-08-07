import React, { useEffect, useState } from "react";
import { ExternalLink, GitHub, Info } from "react-feather";

function PortfolioItem({
  title,
  description,
  imgUrl,
  stack,
  link,
  repo,
  activeTab,
}) {
  const [descriptionVisibility, setDescriptionVisitibility] = useState(false);
  const [vpIsLg, setVpIsLg] = useState(window.innerWidth >= 1024);

  const toggleDescriptionVisibility = () => {
    setDescriptionVisitibility(!descriptionVisibility);
  };

  const checkVpIsLg = () => {
    setVpIsLg(window.innerWidth >= 1024);
  };

  useEffect(() => {
    window.addEventListener("resize", checkVpIsLg);
    return () => window.removeEventListener("resize", checkVpIsLg);
  });

  return (
    <article
      className={`w-full overflow-hidden rounded-2xl bg-stone-50/75 shadow-2xl shadow-stone-700/50 dark:bg-slate-900/75 dark:shadow-slate-950/30 ${
        activeTab ? "flex flex-col items-center justify-start" : "hidden"
      }`}
    >
      <div className="relative">
        <img
          alt={title}
          className="max-h-[600px] object-cover p-4 sm:p-6 lg:p-8"
          src={imgUrl}
        />
        <span
          className={`absolute left-0 top-0 flex gap-1 p-6 text-xs uppercase text-stone-50 opacity-50 dark:text-slate-50 sm:p-9 sm:text-sm lg:p-12 lg:text-base ${
            descriptionVisibility ? "hidden" : ""
          }`}
        >
          <Info className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
          {vpIsLg ? "Click to show description" : "Tap for more"}
        </span>
        <div
          className={`absolute left-0 top-0 h-full w-full cursor-pointer p-4 transition duration-100 sm:p-6 lg:p-8 ${
            descriptionVisibility ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleDescriptionVisibility}
        >
          {descriptionVisibility && (
            <p className="flex h-full w-full items-center justify-center bg-slate-950 bg-opacity-80 p-4 text-center text-xs font-semibold text-stone-50 dark:text-slate-50 sm:p-12 sm:text-base lg:p-16 lg:text-xl">
              <span className="max-w-sm sm:max-w-lg lg:max-w-xl">
                {description}
              </span>
            </p>
          )}
        </div>
      </div>
      <div className="mx-auto flex flex-col items-center justify-between gap-4 self-start p-8 pt-0">
        <div className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-6">
          <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
            {title}
          </h3>
          <span className="flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            <a
              className="itesm-center flex justify-center opacity-50 hover:opacity-100 sm:gap-1"
              href={link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ExternalLink className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
              <span className="hidden text-sm uppercase sm:inline lg:text-base">
                Live
              </span>
            </a>
            <a
              className="itesm-center flex justify-center opacity-50 hover:opacity-100 sm:gap-1"
              href={repo}
              rel="noopener noreferrer"
              target="_blank"
            >
              <GitHub className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
              <span className="hidden text-sm uppercase sm:inline lg:text-base">
                Repo
              </span>
            </a>
          </span>
        </div>
        <p className="flex flex-row flex-wrap items-center justify-center gap-1 text-xs sm:text-sm lg:text-base">
          {stack.map((item, index) => (
            <span
              className="inline-block cursor-default rounded-md px-2 py-1 font-semibold hover:bg-stone-200/50 dark:hover:bg-slate-700/50 sm:px-2.5 sm:py-[0.3125rem] lg:px-3 lg:py-1.5"
              key={index}
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </article>
  );
}

export default PortfolioItem;
