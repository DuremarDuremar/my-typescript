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

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  input {
    height: 20px;
    width: 160px;
    padding: 3px 0 2px 2px;
    margin: 0 3px;
    font-size: 15px;
    font-style: italic;
  }
  i {
    cursor: pointer;
  }
`;
export const Items = styled.div``;
export const Item = styled.div``;
