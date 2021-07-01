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

export const Direct = styled.div`
  width: 500px;
  height: 300px;
  background-color: #fff;
  border-radius: 30px;
  padding: 8px;
`;

export const Foto = styled.div`
  width: 200px;
  img {
    max-width: 100%;
  }
`;
