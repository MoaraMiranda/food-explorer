import { Container } from "./styles";
import PropTypes from "prop-types";
import Logo from "../../assets/logoComplete.png";

export function Logotype({ size, desktopSize, isAdmin }) {
  return (
    <Container $size={size} $desktopSize={desktopSize}>
      <img src={Logo} alt="Blue polygon logo" />

      {isAdmin && <span>admin</span>}
    </Container>
  );
}

Logotype.propTypes = {
  size: PropTypes.number.isRequired,
  desktopSize: PropTypes.number.isRequired,
};
