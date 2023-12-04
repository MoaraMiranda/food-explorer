import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import Logo from "../../assets/logoComplete.png";

export function SignIn() {
  return (
    <Container>
      <Form>
        <div className="logo">
          <img src={Logo} alt="Blue polygon logo" />
        </div>
        <div className="input-wrapper">
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
          <Button title="Login" />
        </div>
        <a href="#">Create your account</a>
      </Form>
    </Container>
  );
}
