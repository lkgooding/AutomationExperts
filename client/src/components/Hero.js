import React from "react";

import {
  HeroContainer,
  HeroBg,
  ImgBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements.js";
import img from "../Images/pcImg.jpg";

const HeroSection = () => {
  
  return (
    <HeroContainer id="home">
      <HeroBg>
        <ImgBg src={img} type="img/png" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Let us Automate your software processes </HeroH1>
        <HeroP>
          Faster, Efficient, Reliable Code for whatever your business needs.
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
