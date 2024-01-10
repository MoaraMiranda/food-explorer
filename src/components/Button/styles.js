import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  padding: 12px 24px;
  text-align: center;
  border: none;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
