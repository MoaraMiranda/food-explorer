import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  color: ${({ theme }) => theme.COLORS.LIGHT_400};
  height: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 99;

  svg {
    width: 2rem;
    height: 1.5rem;
  }

  .button {
    display: none;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: flex;
    }
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      gap: 40px;
      padding: 0 40px;
      > svg {
        display: none;
      }
    }
  }

  .searchDesktop {
    display: none;
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
      display: block;
    }
  }
`;

export const ReceiptButtonMobile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 2.2rem;
    height: 2.2rem;

    > img {
      width: 2.2rem;
      height: 2.2rem;
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

export const SignOut = styled.div`
  width: 32px;
  height: 32px;
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: block;
  }
  > a {
    width: 32px;
    height: 32px;
  }
`;
