import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";
export default createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}

:root{
  font-size: 12px;
  
  @media(min-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 16px;
  }
}

body{
  min-width: 375px;
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  color: ${({ theme }) => theme.COLORS.LIGHT_100}
}

body, input, textarea {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  outline: none;
} 

a{
  text-decoration: none;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

}

button, input {
  border-radius: ${({ theme }) => theme.RADIUS.MD};

}

.containerWrapper{
  max-width: ${DEVICE_BREAKPOINTS.XL};
  padding:0 40px;
}
`;
