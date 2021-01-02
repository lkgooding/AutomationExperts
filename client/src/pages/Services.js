import React from "react";
import Icon1 from "../Images/pc.png";
import Icon2 from "../Images/undraw_data_trends_b0wg.png";
import Icon3 from "../Images/undraw_interview_rmcf.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "../components/ServiceElements.js";

const ServicesPage = () => {
  return (
    <>
     <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Service Info 1</ServicesH2>
          <ServicesP>blah blah 1</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Service info 2</ServicesH2>
          <ServicesP>blah blah 2</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Service info 3</ServicesH2>
          <ServicesP>blah blah 3.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
    
  </>
  );
};
  

export default ServicesPage;

