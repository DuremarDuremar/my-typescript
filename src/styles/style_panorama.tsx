import styled from "styled-components";

export const Content = styled.section<{ respons715: boolean; move: boolean }>`
  grid-column: span 3 / auto;
  margin-top: 40px;
  transition: all 0.3s ease-in-out;
  padding: 0 10px;
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
  display: flex;
  justify-content: center;
  overflow-y: hidden;
  overflow-x: auto;
`;
export const Item = styled.div<{ not?: boolean; respons1000?: boolean }>`
  border: ${(props) => (props.not ? "none" : "1px solid black")};
  cursor: ${(props) => (props.not ? "default" : "pointer")};
  width: ${(props) => (props.respons1000 ? "140px" : "120px")};
  min-width: 90px;
  height: 360px;
  background-color: #0f2027;
  font-size: ${(props) => (props.respons1000 ? "14px" : "12px")};
  color: #fff;
  div {
    text-align: center;
    p:last-child {
      padding-top: 10px;
    }
  }
  img {
    width: 100%;
    height: ${(props) => (props.respons1000 ? "60%" : "55%")};
    display: block;
    margin: 0px auto;
  }
`;
