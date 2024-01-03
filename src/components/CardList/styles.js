import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-x: scroll;

  > h2 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 140%;
    padding: 24px 0 0 24px;
  }

  > .list {
    display: flex;
    gap: 16px;
    padding-left: 24px;
  }
`;
