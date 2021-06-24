import styled from "styled-components";

export const Content = styled.div<{ move: boolean }>`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 8px 20px;
  max-height: ${(props) => (props.move ? "1210px" : "860px")};
`;
