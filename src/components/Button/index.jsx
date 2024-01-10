import { Container } from "./styles";
import Receipt from "../../assets/Receipt.svg";

export function Button({ order, title, ...rest }) {
  return (
    <Container {...rest}>
      {order && <img src={Receipt} alt="receipt image" />}
      {title}
    </Container>
  );
}
