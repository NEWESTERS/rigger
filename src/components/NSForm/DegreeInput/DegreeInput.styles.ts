import styled from "styled-components";

export const Slider = styled.input.attrs({ type: "range" })`
  margin: 0;
`;

export const Input = styled.input.attrs({ type: "number" })`
  margin: 0;
`;

export const TextWrapper = styled.span``;

export const Label = styled.label`
  width: 100%;
  display: block;

  ${TextWrapper} {
    display: block;
    font-family: Arial, Helvetica, sans-serif;
  }

  ${Input} {
    display: inline-block;
    width: 50px;
  }

  ${Slider} {
    display: inline-block;
    width: calc(100% - 56px);
  }
`;
