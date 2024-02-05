import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
export const Background = styled.div`
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  display: flex;
  align-items: center;
  flex: 1;

  > svg {
    margin-left: 14px;
  }

  > input {
    font-size: 1.3rem;
    height: 48px;
    width: 100%;
    padding: 12px 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    background-color: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: 1.3rem;
    }
  }
`;
