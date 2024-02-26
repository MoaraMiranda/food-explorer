import { Header } from "../../../components/Header";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Quantity } from "../../../components/Quantity";
import { BackLink } from "../../../components/BackLink";
import { Container, Content } from "./styles";
import RavanelloDish from "../../../assets/RavanelloDish.png";
import { TagsGroup } from "../../../components/TagsGroup";

import { useNavigate } from "react-router-dom";

export function DishDetails() {
  const navigate = useNavigate();

  function handleRoute(e) {
    e.preventDefault();
    navigate("/admin/edit-dish");
  }

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
            <div className="button-section">
              <Button title="Edit dish" onClick={handleRoute} />
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
