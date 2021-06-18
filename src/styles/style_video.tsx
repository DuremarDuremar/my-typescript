import styled from "styled-components";

export const Content = styled.section<{ respons715: boolean }>`
  grid-column: span 4 / auto;
  div {
    max-width: ${(props) => (props.respons715 ? "560px" : "315px")};
    position: relative;
    transition: all 0.6s ease-in-out;
  }
`;

export const transitionStyles: { [id: string]: React.CSSProperties } = {
  entering: {},
  entered: { transform: "translateY(-300px)", opacity: 0 },
  exiting: {},
  exited: {},
};

export const Panel = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  margin: 30px auto 0;
  background-color: #fff;
  cursor: pointer;
`;

export const Trailer = styled.div`
  display: flex;
  justify-content: center;
  /* width: 560px; */
  margin: 30px auto 0;
  img {
    width: 200px;
  }
`;
