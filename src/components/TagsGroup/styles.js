import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    justify-content: flex-start;
  }
`;
