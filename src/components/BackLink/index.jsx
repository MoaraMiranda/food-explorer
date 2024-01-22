import { Container } from "./styles";
import { Link } from "react-router-dom";

export function BackLink({ title, icon: Icon, route }) {
  return (
    <Container>
      <a>
        <Icon size={16} />
        {title}
      </a>
    </Container>
  );
}
