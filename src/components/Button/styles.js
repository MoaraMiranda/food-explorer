import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  padding: 12px 32px;
  text-align: center;
  border: none;
  font-weight: 500;
  line-height: 24px;
`;
