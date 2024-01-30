import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 140%;
    padding: 24px 0;
  }

  > .list {
    display: flex;
    gap: 16px;
  }
`;
