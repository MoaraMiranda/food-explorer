import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.div`
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: space-between;
    padding: 0 70px;
  }

  > img {
    width: 130px;
    height: fit-content;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 170px;
      height: fit-content;
    }
  }
  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      font-size: 0.8rem;
    }
  }
`;
