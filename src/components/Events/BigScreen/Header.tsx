import React from "react";
import Particles from "react-tsparticles";
import TwinkleTwinkle from "../../TwinkleTwinkle/TwinkleTwinkle";

interface Props {}

const Header = (props: Props) => {
  const particlesInit = (main: any) => {
    console.log(main);
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };
  return (
    <div className="position-relative">
      <TwinkleTwinkle title="Events" noFontSize />
    </div>
  );
};

export default Header;
