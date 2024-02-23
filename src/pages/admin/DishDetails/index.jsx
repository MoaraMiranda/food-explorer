import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Quantity } from "../../../components/Quantity";
import { BackLink } from "../../../components/BackLink";
import { Container, Content } from "./styles";
import RavanelloDish from "../../../assets/RavanelloDish.png";
import { TagsGroup } from "../../../components/TagsGroup";

export function DishDetails() {
  return (
    <Container>
      <Header isAdmin />
      <Content className="containerWrapper">
        <BackLink title="Back" route="/admin" />
        <div className="content-section">
          <img src={RavanelloDish} />
          <div className="dish-details">
            <h1>Ravanello Salad</h1>
            <p>
              Radishes, green leaves, and sweet and sour sauce sprinkled with
              sesame seeds.
            </p>
            <TagsGroup />
            <div >
            <Button title="Edit dish" />
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
