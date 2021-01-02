import React from "react";
import styled from "styled-components";
import { setRem, setFont, setLetterSpacing, setColor } from "../../utils/styles";

function Title({ className, text, center }) {
  return <h3 className={className}>{text}</h3>;
}

export default styled(Title)`
  font-size: ${setRem(36)};
  text-align: ${(props) => (props.center ? "center" : "left")};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
  ${setFont.slanted};
  color: ${setColor.darkBlue};
`;

/*This component plus its styling can be rendered as title for any component. To
/use it you simply return it like so:

<Title text="about us" />
          <p>
            We can automate your processes leading to more efficient app and web performance, 
            maximising your business potential
          </p>

*/ 
