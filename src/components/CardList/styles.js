import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
  }
  .list{
    display: flex;
    gap: 16px;
  }
`;