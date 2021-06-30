import styled from "styled-components";

export const Content = styled.div<{ move: boolean; res715: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 8px 20px;
  max-height: ${(props) =>
    props.move && props.res715
      ? "1260px"
      : props.move && !props.res715
      ? "1230px"
      : !props.move && props.res715
      ? "850px"
      : "950px"};
`;
