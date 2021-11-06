import { useRef } from "react";
import Header from "../components/ExpoAndSpeakerSection/Header";
import ESNav from "../components/ExpoAndSpeakerSection/ESNav";
import { COLORS } from "../constants/constants";
import EsScrollSpy from "../components/ExpoAndSpeakerSection/EsScrollSpy";

interface ExposAndSpeakersProps {}

const ExposAndSpeakers = ({}: ExposAndSpeakersProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const height = window.innerWidth;

  return (
    <div className="container">
      <div className="row">
        <div className={"col-md-6 col-sm-6"}>
          <div
            className="position-relative"
            style={{
              zIndex: 2,
              background: COLORS.PRIMARY,
              width: "100%",
            }}
          >
            <div
              className="position-fixed top-0"
              style={{ marginTop: "calc(60vh/2)" }}
            >
              <Header />
              <ESNav />
            </div>
          </div>
        </div>

        <div
          className={
            "col-md-6 col-sm-6 flex-column d-flex justify-content-center"
          }
        >
          <div ref={parentScrollContainerRef} style={{}}>
            <EsScrollSpy />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExposAndSpeakers;
