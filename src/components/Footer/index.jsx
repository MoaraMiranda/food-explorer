import { Container } from "./styles";
import Logo from "../../assets/Logo_gray.png";

export function Footer() {
  return (
    <Container>
      <div className="containerWrapper">
        <img src={Logo} alt="logo" />
        <span>© 2023 - All rights reserved.</span>
      </div>
    </Container>
  );
}
