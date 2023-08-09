import React from "react";
import { FileText } from "react-feather";
import Socials from "./Socials";

function Intro() {
  return (
    <main
      className="my-8 flex scroll-m-40 flex-col items-center justify-center rounded-2xl bg-stone-50/75 p-8 text-center shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30 sm:my-16 sm:p-12 lg:my-24 lg:p-16"
      id="intro"
    >
      <h2 className="mb-1 text-4xl font-bold sm:mb-1.5 sm:text-5xl lg:mb-2 lg:text-6xl">
        I'm Brendan.
      </h2>
      <h1 className="text-md mb-3 font-medium sm:mb-3.5 sm:text-lg lg:mb-4 lg:text-xl">
        Full Stack Developer
      </h1>
      <p className="mb-3 max-w-xl text-xs font-normal sm:mb-3.5 sm:text-sm lg:mb-4 lg:max-w-2xl lg:text-base">
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
        </span>
        , fervently insisting on maximizing both "vibe" and "flow" in user and
        team experience by working from first principles, regardless of the
        field. I love performing, both on the job and literally, thriving in the
        spotlight but also working to uplift others around me. I strongly
        believe that we are at our best when working with, for, and{" "}
        <em className="italic">from</em> others.
      </p>
      <p className="mb-3 max-w-xl text-xs font-normal sm:text-sm lg:max-w-2xl lg:text-base">
        I'm excited to explore full-time opportunities and individual projects.
        To delve deeper into my professional journey and explore my personal
        story, dive into my{" "}
        <a
          className="whitespace-nowrap hover:brightness-150"
          href="https://drive.google.com/file/d/1APMjRBqqQ-rjyPCxpOLukbxRpwd4ED_O/view?usp=drive_link"
          rel="noreferrer noopener"
          target="_blank"
        >
          <span className="bg-gradient-to-r from-violet-700 to-blue-700 bg-clip-text font-extrabold uppercase text-transparent no-underline decoration-indigo-500 decoration-2 underline-offset-2  dark:from-yellow-500 dark:to-pink-500 dark:decoration-orange-700">
            {"(résumé)"} {"=>"}
          </span>
          <FileText className="inline h-4 w-4 -translate-y-0.5 stroke-blue-700 dark:stroke-pink-500 sm:h-[1.125rem] sm:w-[1.125rem] lg:h-[1.375rem] lg:w-[1.375rem]" />
        </a>
      </p>
      <Socials />
    </main>
  );
}

export default Intro;
