import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Form = styled.form`
  width: 100%;

  > fieldset {
    display: grid;
    gap: 24px;
    border: none;

    > legend {
      font-family: "Poppins", sans-serif;
      font-size: 32px;
      font-weight: 500;
      margin-bottom: 32px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      gap: 16px;
      background-color: ${({ theme }) => theme.COLORS.DARK_800};
      padding: 8px;
      border-radius: ${({ theme }) => theme.RADIUS.MD};
    }

    .add-ingredients-section {
      display: grid;
      gap: 16px;

      > h2 {
        font-size: 1.3rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-weight: 400;
      }
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
      gap: 32px;
      margin-bottom: 100px;
    }
  }
`;
