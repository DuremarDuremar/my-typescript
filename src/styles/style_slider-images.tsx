import styled from "styled-components";

export const Content = styled.section`
  display: flex;
  width: 80%;
  overflow: auto;
  margin: 0px auto;
  position: relative;
  z-index: 1;
  :focus {
    border: 2px solid red;
  }
`;
export const Item = styled.div`
  border-right: 2px solid black;
  min-width: 210px;
  min-height: 230px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
`;
