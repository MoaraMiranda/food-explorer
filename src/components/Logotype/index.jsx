import { Container } from "./styles";
import PropTypes from "prop-types";
import Logo from "../../assets/logoComplete.png";

export function Logotype({ size }) {
  return (
    <Container size={size}>
      <img src={Logo} alt="Blue polygon logo" />
    </Container>
  );
}

Logotype.propTypes = {
  size: PropTypes.number.isRequired,
};
