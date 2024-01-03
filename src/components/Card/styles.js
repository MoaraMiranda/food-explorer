import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  position: relative;
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 16px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }

  > svg {
    width: 24px;
    height: 24px;
  }
  
  .heart {
    position: absolute;
    top: 10px;
    right: 10px;
  
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    font-size: 1.2rem;
    
    > span {
      font-size: 1rem;
      font-family: "Roboto", sans-serif;
      line-height: 16px;
    }
  }
`;
