import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      className="overflow-hidden rounded-md border-2 border-slate-900"
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={title}
        className="h-36 w-full cursor-pointer object-cover"
        src={imgUrl}
      />
      <div className="w-full p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="flex flex-row flex-wrap items-center justify-start gap-2 text-xs">
          {stack.map((item) => (
            <span className="inline-bloxk rounded-md border-2 border-slate-900 px-2 py-1 font-semibold">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;
