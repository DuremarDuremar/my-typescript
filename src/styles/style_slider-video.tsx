import styled from "styled-components";

export const Content = styled.section`
  div {
    position: relative;
    transition: all 0.6s ease-in-out;
  }
`;

export const transitionStyles: { [id: string]: React.CSSProperties } = {
  enter: {},
  entering: {},
  entered: { transform: "translateY(-300px)", opacity: 0 },
  exiting: {},
  exited: {},
  exit: {},
};
export const transitionTrailer: { [id: string]: React.CSSProperties } = {
  enter: {},
  entering: { backgroundColor: "red" },
  entered: { backgroundColor: "yellow" },
  exiting: { backgroundColor: "green" },
  exited: { backgroundColor: "blue" },
  exit: {},
};
export const Panel = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 80%;
  border-right: 2px solid black;
  border-left: 2px solid black;
  margin: 30px auto 0;
  background-color: #fff;
  cursor: pointer;
`;

export const Trailer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  iframe {
    /* opacity: 0.2; */
  }
  img {
    width: 200px;
  }
`;
