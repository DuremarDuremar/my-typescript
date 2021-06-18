import styled from "styled-components";

export const Content = styled.section`
  background-color: #fff;
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;
export const Slider = styled.div`
  height: 450px;
  overflow-y: auto;
  border-top: 10px solid #0f2027;
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
  cursor: pointer;
  :not(:first-child) {
    padding-top: 10px;
  }
  :last-child {
    padding-bottom: 10px;
  }

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
