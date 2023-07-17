import React from "react";

function Title({ children, id }) {
  return (
    <h1
      className="mb-5 text-2xl font-bold text-stone-900 underline decoration-4 underline-offset-8 dark:text-white"
      id={id && id}
    >
      {children}
    </h1>
  );
}

export default Title;
