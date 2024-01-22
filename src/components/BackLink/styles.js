import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    svg {
      margin-right: 8px;
    }
  }
`;
