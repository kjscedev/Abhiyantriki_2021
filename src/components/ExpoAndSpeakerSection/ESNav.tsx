import React from "react";
import { exposAndSpeakersDataJson } from "../../data/exposAndSpeakers";
import "./ES.css";

interface Props {}

const ESNav = (props: Props) => {
  const onPress = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });

      // var headerOffset = 20; // height of the header
      // var elementPosition = target.getBoundingClientRect().top;
      // var offsetPosition = elementPosition - headerOffset;
      // console.log(offsetPosition);

      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: "smooth",
      // });
    }
  };

  const height = window.innerWidth;

  return (
    <div
      style={
        height < 800
          ? {
              display: "flex",
              justifyContent: "center",
              overflowX: "scroll",
            }
          : {}
      }
    >
      {exposAndSpeakersDataJson.map((element) => (
        <a
          key={element.linkHash}
          onClick={(e) => onPress(e)}
          href={`#${element.linkHash}`}
        >
          <div
            style={{ textAlign: "center" }}
            data-to-scrollspy-id={element.linkHash}
            className="ss-item"
          >
            {element.linkName}
          </div>
        </a>
      ))}
    </div>
  );
};

export default ESNav;
