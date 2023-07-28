import React from "react";

function TimelineItem({ year, title, duration, details }) {
  return (
    <ol className="relative flex flex-col border-l border-slate-200">
      <li className="mb-10 ml-4">
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200" />
        <p className="flex flex-row flex-wrap items-center justify-start gap-4 text-xs">
          <span className="inline-block rounded-md bg-slate-900 px-2 py-1 font-semibold text-white">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <div className="my-1 text-sm font-normal leading-none text-slate-400">
            {duration}
          </div>
        </p>
        <p className="my-2 text-base font-normal text-slate-500">{details}</p>
      </li>
    </ol>
  );
}

export default TimelineItem;
