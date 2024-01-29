import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  font-size: 1.6rem;

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
  }
`;
