import styled from "styled-components";

export const Content = styled.div<{ move: boolean; res715: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 8px 20px;
  max-height: ${(props) =>
    props.move && props.res715
      ? "1285px"
      : props.move && !props.res715
      ? "1255px"
      : !props.move && props.res715
      ? "875px"
      : "975px"};
`;
