import React from "react";
import ScrollSpy from "react-ui-scrollspy";
import TextAndButton from "../../TextAndButton/TextAndButton";
import TextAndImage from "../../TextAndImage/TextAndImage";
import { eventData } from "../../../data/eventsData";
import EventCard from "../EventCard/EventCard";

export interface SectionNodeProps {
  parentScrollContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
  navContainerRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const ESScrollSpy = ({
  parentScrollContainerRef,
  navContainerRef,
}: SectionNodeProps) => {
  return (
    <ScrollSpy
      parentScrollContainerRef={parentScrollContainerRef}
      navContainerRef={navContainerRef}
      scrollThrottle={100}
      useBoxMethod={true}
    >
      {eventData.map((element, i) => (
        <div
          id={element.linkHash}
          key={element.linkHash}
          style={i == 0 ? { padding: 50, paddingTop: 100 } : { padding: 50 }}
        >
          <h1 className="text-center" style={{ fontSize: "40px" }}>
            {element.eventName}
          </h1>
          <div>
            {element.events.map((element) => {
              return <EventCard />;
            })}
          </div>
        </div>
      ))}
    </ScrollSpy>
  );
};

export default ESScrollSpy;
