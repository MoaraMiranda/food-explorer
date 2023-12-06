import styled from "styled-components";

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

  > img {
    width: 120px;
    height: fit-content;
  }
  > span {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
