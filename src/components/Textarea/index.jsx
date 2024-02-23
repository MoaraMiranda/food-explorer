import { Container } from "./styles";

export function Textarea({...rest}) {
  return (
    <Container {...rest}>
      <label htmlFor="dish-description">Description</label>
      <textarea
        placeholder="Briefly discuss the dish, its ingredients, and composition."
        id="dish-description"
      />
    </Container>
  );
}
