import styled from "styled-components";

export const Content = styled.section<{ respons715: boolean; move: boolean }>`
  grid-column: span 3 / auto;
  margin-top: 40px;
  background-color: yellow;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.move ? "translateY(0)" : "translateY(-280px)"};
  ${(props) =>
    !props.respons715 &&
    `
    grid-column: span 4 / auto;
    `}
`;
