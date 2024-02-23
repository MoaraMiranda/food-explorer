import { Background, Container } from "./styles";

export function Input({ icon: Icon, title, label, ...rest }) {
  return (
    <Container>
      {label && <label htmlFor={rest.id}>{title}</label>}
      <Background>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </Background>
    </Container>
  );
}
