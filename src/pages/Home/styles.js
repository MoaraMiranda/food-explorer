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
  display: none;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: flex;
    height: 260px;
    margin-top: 164px;
    background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
    position: relative;
    justify-content: center;
    width: 100%;

    > img {
      width: 632px;
      height: 406px;
      position: absolute;
      bottom: 0;
      left: -40px;
    }
    > div {
      display: flex;
      flex-direction: column;
      align-items: left;
      position: absolute;
      right: 100px;
      top: 100px;
    }
  }
`;
