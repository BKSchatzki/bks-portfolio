import React from "react";

function Title({ children, id }) {
  return (
    <h2
      className="mb-5 text-xl font-bold underline decoration-4 underline-offset-8 sm:mb-7 sm:text-2xl lg:mb-10 lg:text-3xl"
      id={id && id}
    >
      {children}
    </h2>
  );
}

export default Title;
