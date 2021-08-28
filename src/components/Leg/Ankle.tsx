import { FC } from "react";
import styled from "styled-components";

import { Bone } from "../../NervousSystem";

const StyledAnkle = styled.div`
  width: 60px;
  height: 40px;
  background-color: #555555;
  border-radius: 15px;
  transform-origin: 40px 10px;
`;

interface AnkleProps extends Bone.Bone {}

const Ankle: FC<AnkleProps> = (props) => {
  return <StyledAnkle style={Bone.toStyle(props)} />;
};

export default Ankle;
