import styled from "styled-components";

export const Content = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(220, 217, 212, 0.9);
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Direct = styled.div<{ respons715: boolean }>`
  /* width: 500px;
  height: 300px; */
  width: ${(props) => (props.respons715 ? "500px" : "250px")};
  height: ${(props) => (props.respons715 ? "300px" : "578px")};
  background-color: #fff;
  border-radius: 30px;
  padding: 8px;
  /* display: flex; */
  display: ${(props) => (props.respons715 ? "flex" : "block")};
`;

export const Foto = styled.div`
  width: 200px;
  height: 300px;
  margin: 0px auto;
  position: relative;

  img {
    max-width: 100%;
    max-height: 300px;
    display: block;
    margin: 0px auto;
  }
`;

export const Info = styled.div`
  text-align: center;
  flex: 1 1;
`;

export const Films = styled.div`
  margin-top: 5px;
  border-top: 2px solid black;
  overflow-y: auto;
  max-height: 190px;
  ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
    background-color: #f9f9fd;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #0f2027;
  }
  p {
    font-style: italic;
  }
`;

export const Exit = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: transparent;
  color: red;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.5);
  }
`;
