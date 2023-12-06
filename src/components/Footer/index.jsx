import { Container } from "./styles";
import Logo from "../../assets/Logo_gray.png";

export function Footer() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <span>© 2023 - All rights reserved.</span>
    </Container>
  );
}
