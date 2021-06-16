import styled from "styled-components";

export const Content = styled.section`
  background-color: #fff;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;
export const Slider = styled.div`
  height: 450px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
    background-color: #0f2027;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f9f9fd;
  }
`;
export const Item = styled.div`
  width: 120px;
  background-color: #0f2027;
  color: #fff;
  padding-top: 10px;
  border-left: 10px solid #0f2027;
  p {
    padding: 0 2px;
    text-align: center;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
