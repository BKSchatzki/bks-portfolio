import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <section
      className="my-8 flex snap-center scroll-m-24 flex-col items-center justify-center sm:my-16 lg:my-24"
      id="timeline"
    >
      <Title>About Me</Title>
      {/* <Title>Timeline</Title> */}
      <div className="w-full rounded-2xl bg-stone-50/75 p-8 shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30 sm:p-12 lg:p-16">
        <p className="mx-auto mb-3 max-w-xl text-center text-xs font-normal sm:mb-3.5 sm:text-sm lg:mb-4 lg:max-w-2xl lg:text-base">
          I've always been a creator, initially venturing into a
          hackathon-turned-startup fresh out of university, and later pursuing
          my dream of composing music for films and games on the West Coast. I
          continued to feed my wanderlust, eventually landing in Southern China,
          where I assumed a corporate training role.
          <br />
          <br />
          There, I interacted with tech giants, securing and managing contracts
          for employees from companies like Alibaba, Huawei, Tencent, Bytedance,
          and Apple. Simultaneously, I spearheaded regional initiatives for
          thousands of customers, but the challenges grew as our systems
          struggled to adapt to the post-pandemic market.
          <br />
          <br />
          Amidst these frustrations and in awe of Shenzhen's tech professionals,
          I realized I wanted to be the one preventing issues rather than
          reacting to them. This realization led me to learn software
          engineering from scratch, and today, I work as a freelance full-stack
          web developer.
          <br />
          <br />
          However, my true aspiration is to join a team of like-minded
          individuals and share the unique perspective I've gained from living
          among the best and brightest. I'm dedicated to making this happen.
        </p>
        {/* {timeline.map((item, index) => (
          <TimelineItem
            details={item.details}
            duration={item.duration}
            key={index}
            title={item.title}
            year={item.year}
          />
        ))} */}
      </div>
    </section>
  );
}

export default Timeline;
