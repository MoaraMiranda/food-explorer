import { Container } from "./styles";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

export function Quantity() {
  return (
    <Container>
      <FaMinus />
      <span>01</span>
      <FaPlus color="white" />
    </Container>
  );
}
