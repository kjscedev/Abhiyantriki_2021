import { useEffect, useState } from "react";
import "./Events.css";
import "../components/Events/EventSection";
import SpaceButton from "../components/Buttons/SpaceButton";
import TwinkleTwinkle from "../components/TwinkleTwinkle/TwinkleTwinkle";
import Center from "../components/Center/Center";

interface EventsProps {}

const Events = ({}: EventsProps) => {
  //if-check to render events on the page

  const [event, setEvent] = useState("Technical");

  useEffect(() => {}, [event]);
  const events = ["Technical", "Shield", "Informals", "Ideate", "Preevents"];

  return (
    <div className="events">
      <TwinkleTwinkle title="Events" />

      <div style={{ display: "table", margin: "0 auto" }}>
        <div className="container p-5">
          <div className="row row-cols-auto g-5">
            {events.map((eventName) => (
              <div className="col">
                <SpaceButton
                  onPress={() => setEvent(eventName)}
                  href="#"
                  text={eventName}
                  noPlus
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
      </div>
    </div>
  );
};

export default Events;
