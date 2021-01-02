import styled from "styled-components";
import {
  setColor,
  setRem,
  setBorder,
  setLetterSpacing,
  setTransition,
  setFont,
} from "../../utils/styles.js";

export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColor.lightBlue};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.darkBlue })};
  ${setLetterSpacing(3)};
  cursor: pointer;
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.lightBlue};
  }
  //Margin props for the button:

  ${(props) =>
    /*The following values correspond to margin top, right, bottom and left. If the prop isn't there, default 
  for each is 0.*/
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration: none;
`;

//An extended Primary button with smaller padding to make a smaller button overall.
export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;