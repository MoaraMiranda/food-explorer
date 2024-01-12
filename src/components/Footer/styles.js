import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 77px;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex: 1;

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
      justify-content: space-between;
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
  }
`;
