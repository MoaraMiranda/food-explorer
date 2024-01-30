import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Quantity } from "../../../components/Quantity";
import { BackLink } from "../../../components/BackLink";
import { Tag } from "../../../components/Tag";
import { BiArrowBack } from "react-icons/bi";
import { Container, Content } from "./styles";
import RavanelloDish from "../../../assets/RavanelloDish.png";
import { TagsGroup } from "../../../components/TagsGroup";

export function DishDetails() {
  return (
    <Container>
      <Header isAdmin />
      <Content className="containerWrapper">
        <BackLink title="Back" icon={BiArrowBack} route="/admin" />
        <img src={RavanelloDish} />
        <h1>Ravanello Salad</h1>
        <p>
          Radishes, green leaves, and sweet and sour sauce sprinkled with sesame
          seeds.
        </p>
        <TagsGroup />
        <Button title="Edit dish" />
      </Content>
      <Footer />
    </Container>
  );
}
