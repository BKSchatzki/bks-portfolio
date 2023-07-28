import React from "react";

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center pb-6 pt-20 text-center">
      <h1 className="mb-1 text-5xl font-bold md:mb-3 md:text-7xl">
        I'm Brendan.
      </h1>
      <p className="mb-3 text-base font-medium md:text-xl">
        Software Engineer | Web Developer
      </p>
      <p className="mb-6 max-w-xl text-sm font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa rem amet
        vel temporibus possimus modi! Alias iure tenetur possimus amet,
        voluptatibus recusandae molestias ut tempora exercitationem sit ducimus
        vitae!
        <br />
        <br />
        Ex perspiciatis et officiis quod non inventore doloribus repellendus
        odit dolores porro, vero ut, reprehenderit laudantium{" "}
        <a
          className="text-cyan-600 decoration-red-600 decoration-2 underline-offset-2 hover:underline"
          href="#"
          rel="noreferrer noopener"
          target="_blank"
        >
          accusantium
        </a>
        ? Consequatur accusamus quo atque?
      </p>
    </div>
  );
}

export default Intro;
