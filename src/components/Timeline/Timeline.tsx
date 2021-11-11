import React, { useEffect, useState } from "react";
import "./Timeline.css";
import InfoSection from "./InfoSection";
import YearButton from "./YearButton";

interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  const [caption, setCaption] = useState(
    "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
  );
  const [path, setPath] = useState("/assets/images/timeline/1998.png");

  const changeTo1998 = () => {
    console.log("changed to 1998");
    setCaption(
      "Abhiyantriki introduced as an individual, standalone festival of technical grandeur and pomp."
    );
    setPath("/assets/images/timeline/1998.png");
  };
  const changeTo2008 = () => {
    console.log("changed to 2008");
    setCaption(
      "Funds collected this year were all donated for the rehabilitation of the flood struck Bihar and Abhiyantriki rose in popularity with extensive media coverage."
    );
    setPath("/assets/images/timeline/2008.png");
  };
  const changeTo2009 = () => {
    console.log("changed to 2009");
    setCaption(
      "KJSCE marks 25 years since its inauguration,  and the closing ceremony of Abhiyantriki was ornamented by the presence of late Dr. A.P.J. Abdul Kalam."
    );
    setPath("/assets/images/timeline/2009.png");
  };
  const changeTo2014 = () => {
    console.log("changed to 2014");
    setCaption(
      "The maiden year for Start-up and Auto Expo, Abhiyantriki this year also encompassed Rohit Suri, the Jagaur India CEO as one of the keynote speakers"
    );
    setPath("/assets/images/timeline/2014.png");
  };
  const changeTo2016 = () => {
    console.log("changed to 2016");
    setCaption(
      "Abhiyantriki extended by a day, now was a two-day long fest with its flagship event being a technical exhibition presided over by ISRO."
    );
    setPath("/assets/images/timeline/2016.png");
  };
  const changeTo2017 = () => {
    console.log("changed to 2017");
    setCaption(
      "Attending to the likes of DRDO, DAE and BARC, Abhiyantriki gamered a running footfall of over 15,000 for the first time in its history!"
    );
    setPath("/assets/images/timeline/2017.png");
  };
  const changeTo2018 = () => {
    console.log("changed to 2018");
    setCaption(
      "Abhiyantriki had the Indian Army exhibiting their artillery as the highlight, along with prominent personalities like Dr S. Christopher and Mr. Vilas Shinde gracing the occasion."
    );
    setPath("/assets/images/timeline/2018.png");
  };
  const changeTo2019 = () => {
    console.log("changed to 2019");
    setCaption(
      "This year witnessed the Indian Navy rolling out an array of Naval armaments at Abhiyantriki along with a riveting talk on the Big Bang by Dr. Bikash Chandra Sinha"
    );
    setPath("/assets/images/timeline/2019.png");
  };

  const [year, setYear] = useState("2016");

  useEffect(() => {
    switch (year) {
      case "1998":
        changeTo1998();
        break;
      case "2008":
        changeTo2008();
        break;
      case "2009":
        changeTo2009();
        break;
      case "2014":
        changeTo2014();
        break;
      case "2016":
        changeTo2016();
        break;
      case "2017":
        changeTo2017();
        break;
      case "2018":
        changeTo2018();
        break;
      case "2019":
        changeTo2019();
        break;
      default:
        break;
    }
  }, [year]);

  return (
    <>
      <h1 className="text-center m-10 my-5">Timeline</h1>
      <div className="d-inline vh-100">
        <div className="d-sm-flex justify-content-around align-items-center w-90 m-20 years">
          <div onClick={() => setYear("1998")}>
            <YearButton year="1998" />
          </div>
          <div onClick={() => setYear("2008")}>
            <YearButton year="2008" />
          </div>
          <div onClick={() => setYear("2009")}>
            <YearButton year="2009" />
          </div>
          <div onClick={() => setYear("2014")}>
            <YearButton year="2014" />
          </div>
          <div onClick={() => setYear("2016")}>
            <YearButton year="2016" />
          </div>
          <div onClick={() => setYear("2017")}>
            <YearButton year="2017" />
          </div>
          <div onClick={() => setYear("2018")}>
            <YearButton year="2018" />
          </div>
          <div onClick={() => setYear("2019")}>
            <YearButton year="2019" />
          </div>
        </div>
        <div className="d-flex justify-content-center w-100 info">
          <InfoSection caption={caption} imgPath={path} />
        </div>
      </div>
    </>
  );
};

export default Timeline;
