import styled from "styled-components";

export const Content = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  padding: 10px 5px;
  font-family: "Ubuntu";
`;

export const Img = styled.section`
  max-width: 600px;
  padding-right: 10px;
  img {
    margin-top: 10px;
    width: 100%;
  }

  p {
    font-size: calc(12px + 1vmax);
    text-align: center;
  }
`;

export const Info = styled.section`
  h1 {
    font-size: calc(14px + 2.5vmax);
  }
  h2,
  h3 {
    font-size: calc(11px + 1.5vmax);
  }
`;
