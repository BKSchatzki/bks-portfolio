import React from "react";

function PortfolioItem({ title, imgUrl, stack, link, activeTab }) {
  return (
    <article
      className={`w-full overflow-hidden rounded-2xl bg-stone-50/75 shadow-2xl shadow-stone-700/50 dark:bg-slate-900/75 dark:shadow-slate-950/30 ${
        activeTab ? "flex flex-col items-center justify-start" : "hidden"
      }`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={title}
        className="max-h-[600px] object-cover p-4 sm:p-6 lg:p-8"
        src={imgUrl}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      />
      <div className="mx-auto flex flex-col items-center justify-between gap-4 self-start p-8 pt-0">
        <h3 className="text-xl font-semibold sm:text-2xl lg:text-3xl">
          {title}
        </h3>
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
