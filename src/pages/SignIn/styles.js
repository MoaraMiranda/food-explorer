import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  > a {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  .input-wrapper {
    width: 316px;
    display: grid;
    gap: 32px;
    margin-top: 70px;

    align-items: center;
  }
  .input-container {
    display: grid;
    gap: 8px;

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }
`;
