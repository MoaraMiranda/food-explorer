import styled from "styled-components";

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme, $saveButton }) =>
    $saveButton ? theme.COLORS.TOMATO_400 : theme.COLORS.TOMATO_100};
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  padding: 12px 24px;
  border: none;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
