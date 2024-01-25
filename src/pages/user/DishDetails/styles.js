import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  padding-top: 36px;

  > img {
    width: 264px;
    height: 264px;
    margin: 0 auto;
  }

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
  }
  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
  }

  .order-section {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  .tags-group {
    display: flex;
    justify-content: space-around;
    margin-bottom: 12px;
  }
`;
