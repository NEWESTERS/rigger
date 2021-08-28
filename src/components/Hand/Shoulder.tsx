import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledElbowContainer = styled.div``;

const StyledShoulder = styled.div`
  position: relative;
  width: 50px;
  height: 80px;
  background-color: #df5757;
  transform-origin: 25px 25px;
  border-radius: 20px;

  ${StyledElbowContainer} {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -25px);
  }
`;

interface ShoulderProps extends Bone.Bone {
  elbow: ReactNode;
}

const Shoulder: FC<ShoulderProps> = (props) => {
  const { elbow } = props;

  return (
    <StyledShoulder style={Bone.toStyle(props)}>
      <StyledElbowContainer>{elbow}</StyledElbowContainer>
    </StyledShoulder>
  );
};

export default Shoulder;
