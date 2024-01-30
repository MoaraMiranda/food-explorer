import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  margin-top: 24px;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
