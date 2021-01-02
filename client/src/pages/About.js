import React from "react";
import Section from "../components/globals/Section";
import Title from "../components/globals/Title";
import Paragraph from "../components/globals/InfoParagraph"
import aboutImg from "../Images/pc.jpg";
import styled from "styled-components";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media,
} from "../utils/styles.js";
import { PrimaryBtn } from "../components/globals/Buttons";
/* import {Link} from 'react-scroll'
import MoreInfo from '../components/MoreInfo'; */

/*Section is responsible for the padding and background
AboutCenter is responsible for the grid layout and is styled below with styled components. 
*/
export default function About() {
return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title text="about us"/>
          <Paragraph text="We can automate your processes leading to more efficient app and web performance, 
            maximising your business potential"/>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
};

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(120)};
  }
  .about-img {
    img {
      width: 150%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.darkBlue })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  width:100vw;
  display: grid;
  max-width: 1170px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    .about-img {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `};
`;
 