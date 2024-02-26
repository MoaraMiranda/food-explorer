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

  .content-section {
    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  .dish-details {
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
  }

  img {
    width: 264px;
    height: 264px;
    margin: 0 auto;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-size: 2.2rem;
    font-weight: 500;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
  }

  .tags-group {
    display: flex;
    justify-content: space-around;
    margin-bottom: 12px;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-top: 36px;

    .content-section {
      display: flex;
      flex-direction: row;
      gap: 50px;
      margin-top: 36px;
    }

    .dish-details {
      display: flex;
      flex-direction: column;
      gap: 24px;
      justify-content: center;
    }

    img {
      width: 390px;
      height: 390px;
    }

    p {
      font-size: 1.4rem;
      text-align: start;
    }

    h1 {
      font-size: 3rem;
      font-weight: 500;
      text-align: start;
    }

    .button-section {
      margin-top: 24px;
      max-width: 150px;
    }
  }
`;
