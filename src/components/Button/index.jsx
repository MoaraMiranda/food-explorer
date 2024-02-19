import { Container } from "./styles";
import Receipt from "../../assets/Receipt.svg";

export function Button({ order, title, $saveButton, ...rest }) {
  return (
    <Container {...rest} $saveButton={$saveButton}>
      {order && <img src={Receipt} alt="receipt image" />}
      {title}
    </Container>
  );
}
