import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: ${(props) => props.$size || 100}px;
  height: auto;
  > h1 {
    margin-left: 8px;
  }

  > img {
    width: 100%;
    height: auto;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: ${(props) => props.$desktopSize || 100}px;
  }
`;
