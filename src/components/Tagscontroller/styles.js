import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme, $isNew }) =>
    $isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: ${({ theme }) => theme.RADIUS.MD};

  > span {
    font-family: "Roboto", sans-serif;
    color: ${({ theme, $isNew }) => theme.COLORS.LIGHT_100};
    font-size: 1.3rem;
    font-weight: 400;
    padding: 12px;
  }
  > button {
    border: none;
    background: none;
    padding-right: 12px;
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme, $isNew }) =>
        $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
      font-size: 1.3rem;
    }
  }

  > input {
    min-height: 32px;
    padding: 12px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 1.3rem;

    &::placeholder {
      font-family: "Roboto", sans-serif;
      color: ${({ theme, $isNew }) =>
        $isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
      font-size: 1.3rem;
      font-weight: 400;
    }
  }
`;
