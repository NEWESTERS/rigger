import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledWristContainer = styled.div``;

const StyledElbow = styled.div`
  position: relative;
  width: 50px;
  height: 100px;
  background-color: #ffdfc4;
  transform-origin: 25px 25px;
  border-radius: 20px;

  ${StyledWristContainer} {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -30px);
  }
`;

interface ElbowProps extends Bone.Bone {
  wrist: ReactNode;
}

const Elbow: FC<ElbowProps> = (props) => {
  const { wrist } = props;

  return (
    <StyledElbow style={Bone.toStyle(props)}>
      <StyledWristContainer>{wrist}</StyledWristContainer>
    </StyledElbow>
  );
};

export default Elbow;
