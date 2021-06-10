import styled from "styled-components";

export const Content = styled.section`
  transition: 0.5s;
  transform: translateX(
    ${({ style }) => (style === "entering" || style === "entered" ? 400 : 0)}px
  );
`;
export const Panel = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
  width: 80%;
  border-right: 2px solid black;
  border-left: 2px solid black;
  margin: 30px auto 0;
  i {
  }
`;

export const Trailer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  img {
    width: 200px;
  }
`;
