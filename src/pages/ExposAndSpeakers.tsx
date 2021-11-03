import { exposAndSpeakersDataJson } from "../data/exposAndSpeakers";
import ScrollSpy from "react-ui-scrollspy";
import { useRef } from "react";
import Header from "../components/ExpoAndSpeakerSection/Header";
import ESNav from "../components/ExpoAndSpeakerSection/ESNav";
import TextAndButton from "../components/TextAndButton/TextAndButton";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const height = window.innerWidth;

  return (
    <div className="container">
      <div className="row vh-100">
        <div
          className={
            height > 800
              ? "col-sm-4 col-md-4"
              : "flex-column d-flex justify-content-center"
          }
        >
          <div
            // className="position-fixed"
            style={{
              zIndex: 2,
              background: "linear-gradient(#001121, #001121)",
              width: "100%",
            }}
          >
            <Header />
            <ESNav />
          </div>
        </div>
        {/* <div className="col-sm-8 col-md-8 flex-column d-flex justify-content-center"> */}
        <div
          className={
            "flex-column d-flex justify-content-center" + "col-sm-8 col-md-8"
          }
        >
          <div
            ref={parentScrollContainerRef}
            style={{
              marginTop: 100,
              overflowY: "scroll",
              position: "relative",
              height: "100vh",
            }}
          >
            <ScrollSpy
              parentScrollContainerRef={parentScrollContainerRef}
              scrollThrottle={100}
              offsetTop={35}
            >
              {exposAndSpeakersDataJson.map((element, i) => (
                <div
                  id={element.linkHash}
                  key={element.linkHash}
                  style={
                    i === 3
                      ? { paddingBottom: 200, padding: 50 }
                      : { padding: 50 }
                  }
                >
                  <h1 className="mt-5 text-center" style={{ fontSize: "50px" }}>
                    {element.heading}
                  </h1>
                  <TextAndButton
                    paraText={element.paraText}
                    buttonHref={element.buttonHref}
                    buttonText={element.buttonText}
                  />
                </div>
              ))}
            </ScrollSpy>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
