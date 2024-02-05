import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  textarea {
    font-size: 1.3rem;
    width: 100%;
    height: 270px;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    resize: none;
    border-radius: ${({ theme }) => theme.RADIUS.MD};
    padding: 14px;
  }

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    font-size: 1.3rem;
  }
`;
