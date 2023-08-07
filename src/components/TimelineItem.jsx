import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-stone-300 dark:border-slate-700">
      <li className="mb-4 ms-4 sm:mb-6 sm:ms-6 lg:mb-8 lg:ms-8">
        <div className="absolute -left-1.5 h-3 w-3 rounded-full bg-stone-300 dark:bg-slate-700 sm:-left-2 sm:h-4 sm:w-4 lg:-left-2.5 lg:h-5 lg:w-5" />
        <div className="flex flex-row flex-wrap items-center justify-start gap-4 text-[0.625rem] sm:gap-5 sm:text-xs lg:gap-6 lg:text-sm">
          <span className="inline-block rounded-md bg-stone-950 px-2 py-1 font-semibold text-stone-50 dark:bg-slate-50 dark:text-slate-950">
            {year}
          </span>
          <h4 className="text-base font-semibold sm:text-lg lg:text-xl">
            {title}
          </h4>
          <span className="my-0 text-xs font-normal leading-none opacity-40 sm:my-0.5 sm:text-sm lg:my-1 lg:text-base">
            {duration}
          </span>
        </div>
        <p className="my-2 text-sm font-normal opacity-60 sm:my-2.5 sm:text-base lg:my-3 lg:text-lg">
          {details}
        </p>
      </li>
    </ol>
  );
}

export default TimelineItem;
