import { FC, ReactNode, CSSProperties } from "react";
import styled from "styled-components";

import { Bone } from "../NervousSystem";

const StyledHeadContainer = styled.div``;

const StyledLeftHandContainer = styled.div``;

const StyledRightHandContainer = styled.div``;

const StyledLeftLegContainer = styled.div``;

const StyledRightLegContainer = styled.div``;

const StyledBody = styled.div`
  position: relative;
  width: 100px;
  height: 200px;
  border-radius: 20px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #dd5555;
    border-radius: inherit;
    z-index: 1;
  }

  ${StyledHeadContainer} {
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
  }

  ${StyledLeftHandContainer} {
    position: absolute;
    left: -25px;
    top: 0;
    z-index: 2;
  }

  ${StyledRightHandContainer} {
    transform: scaleX(-1);
    position: absolute;
    right: -25px;
    top: 0;
    z-index: 2;
  }

  ${StyledLeftLegContainer} {
    position: absolute;
    left: -5px;
    top: calc(100% - 40px);
  }

  ${StyledRightLegContainer} {
    transform: scaleX(-1);
    position: absolute;
    right: -5px;
    top: calc(100% - 40px);
  }
`;

interface BodyProps extends Bone.Bone {
  head: ReactNode;
  leftHand: ReactNode;
  rightHand: ReactNode;
  leftLeg: ReactNode;
  rightLeg: ReactNode;
}

const Body: FC<BodyProps> = (props) => {
  const { head, leftHand, rightHand, leftLeg, rightLeg } = props;

  return (
    <StyledBody style={Bone.toStyle(props)}>
      <StyledHeadContainer>{head}</StyledHeadContainer>

      <StyledLeftHandContainer>{leftHand}</StyledLeftHandContainer>

      <StyledRightHandContainer>{rightHand}</StyledRightHandContainer>

      <StyledLeftLegContainer>{leftLeg}</StyledLeftLegContainer>

      <StyledRightLegContainer>{rightLeg}</StyledRightLegContainer>
    </StyledBody>
  );
};

export default Body;
