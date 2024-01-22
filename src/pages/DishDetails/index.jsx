import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Quantity } from "../../components/Quantity";
import { BackLink } from "../../components/BackLink";
import { BiArrowBack } from "react-icons/bi";
import { Container, Content } from "./styles";
import RavanelloDish from "../../assets/RavanelloDish.png";

export function DishDetails() {
  return (
    <Container>
      <Header />
      <Content className="containerWrapper">
        <BackLink title="Back" icon={BiArrowBack} />
        <img src={RavanelloDish} />
        <h1>Ravanello Salad</h1>
        <p>
          Radishes, green leaves, and sweet and sour sauce sprinkled with sesame
          seeds.
        </p>
        <div className="order-section">
          <Quantity />
          <Button title="Order - $10,00" order />
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
