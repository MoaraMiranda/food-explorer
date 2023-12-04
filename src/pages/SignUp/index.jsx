import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Logo from "../../assets/logoComplete.png";

export function SignUp() {
  return (
    <Container>
      <Form>
        <div className="logo">
          <img src={Logo} alt="Blue polygon logo" />
        </div>
        <div className="input-wrapper">
          <div className="input-container">
            <label htmlFor="name">Your name</label>
            <Input id="name" placeholder="Example: Tom Cruise" type="text" />
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              placeholder="Example: example@example.com"
              type="text"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              placeholder="At least 6 caracteres"
              type="password"
            />
          </div>
          <Button title="Create account" />
        </div>
        <a href="#">I already have an account</a>
      </Form>
    </Container>
  );
}
