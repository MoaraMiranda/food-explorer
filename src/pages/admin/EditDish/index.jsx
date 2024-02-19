import { BackLink } from "../../../components/BackLink";
import { Button } from "../../../components/Button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { DownloadImageButton } from "../../../components/DownloadImageButton";
import { Input } from "../../../components/Input";
import { Textarea } from "../../../components/Textarea";
import { TagsController } from "../../../components/Tagscontroller";
import { Container, Content, Form } from "./styles";
import { DropdownList } from "../../../components/DropdownList";

export function EditDish() {
  const categories = ["Snack", "Main dishes", "Desserts"];

  return (
    <Container>
      <Header isAdmin />
      <Content className="containerWrapper">
        <BackLink title="Back" route="/admin" />
        <Form className="form-container">
          <fieldset>
            <legend>Edit Dish</legend>
            <DownloadImageButton id="image" title="Select Image" />
            <Input
              id="name"
              placeholder="Ex.: Ceasar Salad"
              type="text"
              title="Name"
              label
            />
            <DropdownList options={categories} label="Dishes Category" />
            <section className="add-ingredients-section">
              <h2>Ingredients</h2>
              <div className="tags">
                <TagsController $isNew placeholder="Add" />
                <TagsController placeholder="Lettuce" />
                <TagsController placeholder="White Bread" />
                <TagsController placeholder="Tomato" />
              </div>
            </section>
            <Input
              id="price"
              placeholder="€ 10,50"
              type="text"
              title="Price"
              label
            />
            <Textarea />
            <div className="buttons">
              <Button title="Delete Dish" />
              <Button title="Save" $saveButton />
            </div>
          </fieldset>
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
