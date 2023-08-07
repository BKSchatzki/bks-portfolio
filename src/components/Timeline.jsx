import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <section
      className="my-8 flex scroll-m-24 flex-col items-center justify-center sm:my-16 lg:my-24"
      id="timeline"
    >
      <Title>Timeline</Title>
      <div className="w-full rounded-2xl bg-stone-50/75 p-8 shadow-2xl shadow-stone-700/30 dark:bg-slate-900/75 dark:shadow-slate-950/30">
        {timeline.map((item, index) => (
          <TimelineItem
            details={item.details}
            duration={item.duration}
            key={index}
            title={item.title}
            year={item.year}
          />
        ))}
      </div>
    </section>
  );
}

export default Timeline;
