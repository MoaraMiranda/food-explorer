import { BackLink } from "../../../components/BackLink";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { DownloadImageButton } from "../../../components/DownloadImageButton";
import { Input } from "../../../components/Input";
import { Container, Content, Form } from "./styles";


export function NewDish() {
  return (
    <Container>
      <Header isAdmin />
      <Content className="containerWrapper">
        <BackLink title="Back" route="/admin" />
        <h1>New Dish</h1>
        <Form>
           <DownloadImageButton title="Select Image" />
          <div className="input-container">
            <label htmlFor="text">Name</label>
            <Input id="text" placeholder="Ex.: Ceasar Salad" type="password" />
          </div>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}