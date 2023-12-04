import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  height: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .test {
    width: 100%;
    display: flex;
    justify-content: space-around;

    align-items: center;
  }
`;

export const ReceiptButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 26px;
    height: 26px;

    > img {
      width: 26px;
      height: 26px;
    }
  }

  .numberOfOrders {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
    width: 18px;
    height: 18px;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
