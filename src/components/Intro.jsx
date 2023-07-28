import React from "react";

function Intro() {
  return (
    <main
      className="my-16 flex scroll-m-40 flex-col items-center justify-center rounded-2xl bg-slate-50 p-8 text-center shadow-2xl dark:bg-neutral-900 dark:shadow-neutral-900"
      id="intro"
    >
      <h1 className="mb-1 text-5xl font-bold">I'm Brendan.</h1>
      <p className="mb-3 text-base font-medium">
        Software Engineer | Web Developer
      </p>
      <p className="max-w-xl text-sm font-normal">
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
