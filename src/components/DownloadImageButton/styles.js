import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  button {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    border-radius: ${({ theme }) => theme.RADIUS.SM};
    padding: 12px 24px;
    border: none;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    > img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
`;
