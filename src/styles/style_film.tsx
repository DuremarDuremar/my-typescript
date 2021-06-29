import styled from "styled-components";

export const Content = styled.section`
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
  font-family: "Ubuntu";
`;

export const Left = styled.div`
  max-width: 600px;
  padding-right: 10px;
  img {
    margin-top: 10px;
    width: 100%;
  }
`;

export const Director = styled.div`
  h4 {
    font-size: calc(12px + 1vmax);
    text-align: center;
  }
`;

export const Right = styled.div``;

export const Info = styled.div`
  text-align: center;
  h1 {
    font-size: calc(14px + 2.5vmax);
  }
  h2,
  h3 {
    font-size: calc(11px + 1.5vmax);
  }
`;

export const Frames = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  div {
    img {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

export const Button = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(
        at 50% 0%,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(0, 0, 0, 0.5) 50%
      );
    border-radius: 50%;
  }
`;

export const Footer = styled.div`
  padding: 20px 10px;
`;
