import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  /* flex: 1; */
`;

export const Content = styled.div`
  display: flex;
`;
