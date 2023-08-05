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
        className="max-h-[600px] object-cover p-4"
        src={imgUrl}
        style={{
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
        }}
      />
      <div className="mx-auto flex flex-col items-center justify-between gap-4 self-start p-8 pt-4">
        <h3 className="text-xl font-semibold sm:text-2xl">{title}</h3>
        <p className="flex flex-row flex-wrap items-center justify-center gap-1 text-xs sm:text-sm">
          {stack.map((item, index) => (
            <span
              className="inline-block cursor-default rounded-md px-2 py-1 font-semibold hover:bg-stone-200/50 dark:hover:bg-slate-700/50"
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
