import React from "react";
import styled from "styled-components";
import { setRem, setLetterSpacing} from "../../utils/styles";

function Paragraph({ className, text, center }) {
  return <p className={className}>{text}</p>;
}

export default styled(Paragraph)`
  font-size: ${setRem(20)};
  text-align: ${(props) => (props.center ? "center" : "left")};
  //text-transform: capitalize;
  ${setLetterSpacing(5)};
`;

// This component plus its styling can be rendered as paragraph for any component.