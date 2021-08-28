import { FC } from "react";
import styled from "styled-components";

import { Bone } from "../NervousSystem";

const StyledHead = styled.div`
  width: 120px;
  height: 120px;
  background-color: #ffdfc4;
  transform-origin: 60px 120px;
  border-radius: 50px;
`;

interface HeadProps extends Bone.Bone {}

const Head: FC<HeadProps> = (props) => {
  return <StyledHead style={Bone.toStyle(props)} />;
};

export default Head;
