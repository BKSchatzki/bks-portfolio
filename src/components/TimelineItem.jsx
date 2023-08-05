import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-stone-200 dark:border-slate-700">
      <li className="mb-8 ml-4 mr-4">
        <div className="absolute -left-1.5 h-3 w-3 rounded-sm bg-stone-200 dark:bg-slate-700" />
        <div className="flex flex-row flex-wrap items-center justify-start gap-4 text-[0.625rem] sm:text-xs">
          <span className="inline-block rounded-md bg-stone-950 px-2 py-1 font-semibold text-stone-50 dark:bg-slate-50 dark:text-slate-950">
            {year}
          </span>
          <h3 className="text-base font-semibold sm:text-lg">{title}</h3>
          <span className="my-1 text-xs font-normal leading-none opacity-40 sm:text-sm">
            {duration}
          </span>
        </div>
        <p className="my-2 text-sm font-normal opacity-60 sm:text-base">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
