import { useRef } from "react";
import { COLORS } from "../../constants/constants";
import ESNav from "./ESNav";
import EsScrollSpy from "./EsScrollSpy";
import Header from "./Header";

interface ESBigScreenProps {}

const ESBigScreen = ({}: ESBigScreenProps) => {
  const parentScrollContainerRef = useRef<HTMLDivElement | null>(null);
  const height = window.innerWidth;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
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
                style={{ marginTop: "calc(40vh/2)" }}
              >
                <Header />
                <ESNav />
              </div>
            </div>
          </div>

          <div
            className={
              "col-md-8 col-sm-8 col-lg-8 flex-column d-flex justify-content-center"
            }
          >
            <div ref={parentScrollContainerRef} style={{}}>
              <EsScrollSpy />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ESBigScreen;