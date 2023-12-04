import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex: 1;
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
  .logo {
    display: flex;
    margin-bottom: 70px;

    > h1 {
      margin-left: 8px;
    }
  }
  .input-wrapper {
    width: 316px;
    display: grid;
    gap: 32px;
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
