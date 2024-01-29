import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  position: relative;
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  > h1 {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Poppins", sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 1.6rem;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    text-align: center;
  }

  .icon {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    position: absolute;
    top: 10px;
    right: 10px;
  }

  > .dish-image {
    min-width: 100%;
    height: auto;
    padding: 10px;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-family: "Roboto", sans-serif;
    line-height: 16px;
  }
`;
