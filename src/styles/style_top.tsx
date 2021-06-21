import styled from "styled-components";
import { pulse } from "./style_app";

export const Content = styled.section<{
  respons1000: boolean;
  respons715: boolean;
}>`
  grid-column: span 4 / auto;
  display: flex;
  max-width: ${(props) =>
    props.respons1000 ? "990px" : props.respons715 ? "690px" : "408px"};
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0px auto;
  position: relative;
  z-index: 1;
`;

export const Item = styled.div<{ respons1000: boolean }>`
  position: relative;
  border-right: 2px solid black;
  min-width: ${(props) => (props.respons1000 ? "196px" : "136px")};
  background-color: #3c3b3f;
  cursor: pointer;

  img {
    transition: all 0.4s ease-in-out;
    width: 100%;
    height: 100%;
  }
  :hover img {
    opacity: 0.4;
  }
  :hover button {
    color: #fff;
    z-index: 3;
  }
`;

export const Button = styled.button<{ left?: boolean; respons1000: boolean }>`
  position: absolute;
  background-color: transparent;
  color: transparent;
  transition: all 0.8s ease-out;
  left: ${(props) =>
    props.left && props.respons1000
      ? "5%"
      : !props.left && props.respons1000
      ? "75%"
      : "35%"};
  top: ${(props) =>
    !props.respons1000 && props.left
      ? "10%"
      : !props.respons1000 && !props.left
      ? "70%"
      : "45%"};

  :hover {
    border-radius: 50%;
    animation: ${pulse("10px", "10px")} 1s infinite;
  }
`;
