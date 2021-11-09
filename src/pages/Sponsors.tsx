import { useRef, useState } from "react";
import "./Sponsors.css";
import "../components/Timeline/Timeline.css";
import { sponsorsImgSources } from "../data/sponsorsImgSources";

interface SponsorsProps {}

const Sponsors = ({}: SponsorsProps) => {
  const [year, setYear] = useState<number>(2021);
  const yearRef = useRef<HTMLSpanElement | null>(null);

  return (
    <div className="container">
      <h1 className={"text-center"}>Sponsers</h1>
      <p className={"responsive-para text-center" + ` fs-4`}>
        Information Technology is growing exponentially constantly, every
        second, around the globe.India is not far behind with its own IT
        industry booming to new heights. Get to know about 'Future of IT sector
        in India' on the 24th of October at the Panel Session in Abhiyantriki
        2021!
      </p>

      {/* YearCarousal */}
      <div className="d-flex justify-content-around align-items-center font-size p-5">
        <i
          className="arrows fas fa-chevron-left"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(sponsorsImgSources);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (year == min) {
              setYear(max);
            } else {
              setYear((prev) => prev - 1);
            }
          }}
        ></i>
        <span ref={yearRef} className="displaying-year animation">
          {year}
        </span>
        <i
          className="arrows fas fa-chevron-right"
          onClick={() => {
            // get min and max of all keys in our dict
            const keys = Object.keys(sponsorsImgSources);
            const max = parseInt(keys[keys.length - 1]);
            const min = parseInt(keys[0]);

            if (year == max) {
              setYear(min);
            } else {
              setYear((prev) => prev + 1);
            }
          }}
        ></i>
      </div>

      <div className="text-center fs-2 mb-5">Presented By</div>

      <div className="d-flex justify-content-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
          {sponsorsImgSources[year].map((source: string) => (
            <div className="col m-3 d-flex flex-column mx-auto">
              <img src={source} alt="source" width={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
