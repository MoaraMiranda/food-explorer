import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.RADIUS.SM};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    font-size: 0.8rem;
  }
`;
