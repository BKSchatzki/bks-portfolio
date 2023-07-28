import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <section className="my-16 flex flex-col items-center justify-center">
      <Title>Timeline</Title>
      <div className="w-full rounded-2xl bg-slate-50 p-8 shadow-2xl">
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
