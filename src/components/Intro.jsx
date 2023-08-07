import React from "react";

function Intro() {
  return (
    <main
      className="my-8 flex scroll-m-40 flex-col items-center justify-center rounded-2xl bg-stone-50/75 p-8 text-center shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30 sm:my-16 sm:p-12 lg:my-24 lg:p-16"
      id="intro"
    >
      <h1 className="mb-1 text-4xl font-bold sm:text-5xl lg:text-6xl">
        I'm Brendan.
      </h1>
      <p className="mb-3 text-sm font-medium sm:text-base lg:text-lg">
        Full Stack Developer
      </p>
      <p className="max-w-xl text-xs font-normal sm:text-sm lg:max-w-2xl lg:text-base">
        As a{" "}
        <span className="bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-yellow-600 dark:to-pink-600">
          Lifelong Explorer
        </span>
        , my mission is to push the boundaries and explore new territories in my
        life and my work. I have worked as an{" "}
        <span className="bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-yellow-600 dark:to-pink-600">
          Ex-Expat Professional
        </span>{" "}
        within vastly different cultures and strive to contribute to and
        cultivate a culture of inclusivity and individuation. I am an{" "}
        <span className="bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-yellow-600 dark:to-pink-600">
          Aesthete
        </span>{" "}
        and a{" "}
        <span className="bg-gradient-to-r from-violet-800 to-blue-800 bg-clip-text font-semibold text-transparent dark:from-yellow-600 dark:to-pink-600">
          Systematizer
        </span>{" "}
        , fervently insisting on maximizing both "vibe" and "flow" in user and
        team experience by working from first principles, regardless of the
        field. I love performing, both on the job and literally, thriving in the
        spotlight but also working to uplift others around me. I strongly
        believe that we are at our best when working with, for, and{" "}
        <em className="italic">from</em> others.
        <br />
        <br />
        I'm excited to explore full-time opportunities and individual projects.
        Dive into my{" "}
        <a
          className="bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text font-extrabold text-transparent underline decoration-indigo-500 decoration-2 underline-offset-2 hover:scale-150 hover:brightness-150 dark:from-yellow-500 dark:to-pink-500 dark:decoration-orange-700"
          href="#"
          rel="noreferrer noopener"
          target="_blank"
        >
          résumé
        </a>{" "}
        to delve deeper into my professional journey, and join me in exploring
        my personal story.
      </p>
    </main>
  );
}

export default Intro;
