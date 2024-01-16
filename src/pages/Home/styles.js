import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
`;

export const BannerSection = styled.div`
  display: flex;
  height: 120px;
  margin-top: 44px;
  background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
  position: relative;
  width: 100%;
  align-items: center;

  .containerImg {
    min-width: 40%;
    height: 100%;

    > img {
      width: 190px;
      height: 140px;
      position: absolute;
      bottom: 0;
      left: -30px;
    }
  }
  > div {
    z-index: 1;
    > h1 {
      font-size: 18px;
      line-height: 25px;
      font-family: "Poppins", sans-serif;
      font-weight: 600;
      color: ${({ theme }) => theme.COLORS.LIGHT_200};
      letter-spacing: 1px;
    }
    > p {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 190px;

    .containerImg {
      > img {
        width: 350px;
        height: auto;
        position: absolute;
        bottom: 0;
        left: -30px;
      }
    }
    > div {
      margin-left: 10px;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    height: 260px;
    margin-top: 164px;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    position: relative;
    justify-content: center;
    width: 100%;

    .containerImg {
      > img {
        width: 632px;
        height: 406px;
        position: absolute;
        bottom: 0;
        left: -40px;
      }
    }
    > div {
      > h1 {
        font-size: 40px;
        line-height: 56px;
        letter-spacing: 2px;
      }
    }
  }
`;
