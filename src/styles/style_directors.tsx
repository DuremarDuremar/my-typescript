import styled from "styled-components";
import { pulse } from "./style_app";

export const Content = styled.section<{ respons715: boolean; move: boolean }>`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.move ? "translateY(0)" : "translateY(-280px)"};
  ${(props) =>
    !props.respons715 &&
    `
    grid-column: span 4 / auto;
    `}
`;
export const Slider = styled.div<{ respons715: boolean; respons1000: boolean }>`
  ${(props) =>
    props.respons1000 &&
    `
    overflow-y: auto;
    overflow-x: hidden;
    height: 425px;
    `}

  ${(props) =>
    props.respons715 &&
    !props.respons1000 &&
    `
    overflow-y: auto;
    overflow-x: hidden;
    height: 460px;
    `}

  ${(props) =>
    !props.respons715 &&
    `
    overflow-y: hidden;
    overflow-x: auto;
    height: 150px;
    max-width: 600px;
    display: flex;
    align-items:center;
    `}

::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0f2027;
  }
`;
export const Item = styled.div<{ respons715: boolean }>`
  background-color: #0f2027;
  color: #fff;
  cursor: pointer;
  ${(props) =>
    props.respons715 &&
    `
    width: 120px;
    :not(:first-child) {
    padding-top: 10px;
     }
    :last-child {
    padding-bottom: 10px;
     }
    :first-child {
    border-top: 10px solid #0f2027;
     }

    `}
  ${(props) =>
    !props.respons715 &&
    `
    min-width: 90px;
    height: 132px;

    :last-child {
      border-right: 10px solid #0f2027;
     }
    `}

  border-left: 10px solid #0f2027;
  p {
    padding: 0 2px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;

    :hover {
      animation: ${pulse("10px", "30px")} 1s infinite;
      border-radius: 60%;
    }
  }
`;
