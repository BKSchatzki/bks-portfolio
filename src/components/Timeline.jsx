import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <section
      className="my-16 flex scroll-m-24 flex-col items-center justify-center"
      id="timeline"
    >
      <Title>Timeline</Title>
      <div className="w-full rounded-2xl bg-slate-50/75 p-8 shadow-2xl dark:bg-neutral-900/75 dark:shadow-neutral-900">
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
