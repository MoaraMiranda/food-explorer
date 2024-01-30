import { Container } from "./styles";
import { Link } from "react-router-dom";
import { RxCaretLeft } from "react-icons/rx";

export function BackLink({ title, route }) {
  return (
    <Container>
      <Link to={route}>
        <RxCaretLeft size={24} />
        {title}
      </Link>
    </Container>
  );
}
