import styled from "styled-components";
// import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  label {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-weight: 400;
  }
  .custom-select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    position: relative;
    padding: 16px;
    font-size: 1.2rem;
  }

  .custom-select.open select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
  }

  select {
    background: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border: none;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-size: 1.3rem;
  }
  option {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
  select:focus-visible {
    outline-offset: 12px;
  }
`;
