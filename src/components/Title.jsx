import React from "react";

function Title({ children, id }) {
  return (
    <h2
      className="mb-5 text-2xl font-bold underline decoration-4 underline-offset-8"
      id={id && id}
    >
      {children}
    </h2>
  );
}

export default Title;