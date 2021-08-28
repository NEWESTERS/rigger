import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledKneeContainer = styled.div``;

const StyledHip = styled.div`
  position: relative;
  width: 50px;
  height: 100px;
  background-color: #db5353;
  transform-origin: 25px 25px;
  border-radius: 20px;

  ${StyledKneeContainer} {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -25px);
  }
`;

interface HipProps extends Bone.Bone {
  knee: ReactNode;
}

const Hip: FC<HipProps> = (props) => {
  const { knee } = props;

  return (
    <StyledHip style={Bone.toStyle(props)}>
      <StyledKneeContainer>{knee}</StyledKneeContainer>
    </StyledHip>
  );
};

export default Hip;
