import { FC } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledWrist = styled.div`
  width: 55px;
  height: 55px;
  background-color: #ffdfc4;
  border-radius: 20px;
`;

interface WristProps extends Bone.Bone {}

const Wrist: FC<WristProps> = (props) => {
  return <StyledWrist style={Bone.toStyle(props)} />;
};

export default Wrist;
