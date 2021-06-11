import styled from "styled-components";

export const Content = styled.section`
  position: relative;
  transition: all 2s ease-in-out;
`;

export const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: { backgroundColor: "#fff" },
  entered: { backgroundColor: "yellow" },
  exiting: { backgroundColor: "red " },
  exited: { backgroundColor: "green" },
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
`;

export const Trailer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 200px;
  }
`;
