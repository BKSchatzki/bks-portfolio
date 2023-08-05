import React from "react";

function Intro() {
  return (
    <main
      className="my-8 flex scroll-m-40 flex-col items-center justify-center rounded-2xl bg-stone-50/75 p-8 text-center shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30 sm:my-16"
      id="intro"
    >
      <h1 className="mb-1 text-4xl font-bold sm:text-5xl">I'm Brendan.</h1>
      <p className="mb-3 text-sm font-medium sm:text-base">
        Software Engineer | Web Developer
      </p>
      <p className="max-w-xl text-xs font-normal sm:text-sm">
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
    </main>
  );
}

export default Intro;
