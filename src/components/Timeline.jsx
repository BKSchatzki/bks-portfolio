import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <section className="my-20 flex flex-col justify-center">
      <div className="w-full">
        <Title>Timeline</Title>
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
