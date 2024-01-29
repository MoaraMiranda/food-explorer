import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  /* width: ${(props) => props.$size || 8.3}rem; */
  /* height: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1;

  > h1 {
    margin-left: 8px;
  }

  > img {
    max-width: ${(props) => props.$size || 8.3}rem;

    /* max-width: 100%; */
    height: auto;
    flex: 1;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: ${(props) => props.$desktopSize || 8.3}rem;
  }
`;
