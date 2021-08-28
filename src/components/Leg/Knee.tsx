import { FC, ReactNode } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledAnkleContainer = styled.div``;

const StyledKnee = styled.div`
  position: relative;
  width: 50px;
  height: 120px;
  background-color: #db5353;
  transform-origin: 25px 25px;
  border-radius: 20px;

  ${StyledAnkleContainer} {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-60%, -25px);
  }
`;

interface KneeProps extends Bone.Bone {
  ankle: ReactNode;
}

const Knee: FC<KneeProps> = (props) => {
  const { ankle } = props;

  return (
    <StyledKnee style={Bone.toStyle(props)}>
      <StyledAnkleContainer>{ankle}</StyledAnkleContainer>
    </StyledKnee>
  );
};

export default Knee;
