import styled from "styled-components";

export const Container = styled.span`
  font-size: 1.2rem;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
`;
