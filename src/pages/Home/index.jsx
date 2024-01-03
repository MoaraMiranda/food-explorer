import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Content } from "./styles";
import { CardList } from "../../components/CardList";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <CardList title="Meals" />
        <CardList title="Main Dishes" />
        <CardList title="Favorites" />
      </Content>
      <Footer />
    </Container>
  );
}
