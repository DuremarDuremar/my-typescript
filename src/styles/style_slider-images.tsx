import styled from "styled-components";
import "styled-components";
export const Content = styled.section<{ respons1000: boolean }>`
  display: flex;
  width: ${(props) => (props.respons1000 ? "990px" : "690px")};
  /* width: 80%; */
  overflow: auto;
  margin: 0px auto;
  position: relative;
  z-index: 1;
  :focus {
    border: 2px solid red;
  }
`;

export const Item = styled.div<{ respons1000: boolean }>`
  border-right: 2px solid black;
  min-width: ${(props) => (props.respons1000 ? "200px" : "136px")};
  /* min-height: auto; */
  /* min-width: 210px;
  min-height: 230px; */
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
