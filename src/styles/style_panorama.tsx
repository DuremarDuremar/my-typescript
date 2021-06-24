import styled from "styled-components";

export const Content = styled.section<{ respons715: boolean; move: boolean }>`
  grid-column: span 3 / auto;
  margin-top: 40px;
  transition: all 0.3s ease-in-out;
  transform: ${(props) =>
    props.move ? "translateY(0)" : "translateY(-280px)"};
  ${(props) =>
    !props.respons715 &&
    `
    grid-column: span 4 / auto;
    `}
`;

export const Search = styled.form`
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
export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
export const Item = styled.div`
  border: 1px solid black;
  cursor: pointer;
  div {
    text-align: center;
  }
  img {
    width: 140px;
    height: 220px;
    display: block;
    margin: 0px auto;
  }
`;
