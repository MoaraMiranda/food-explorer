import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logotype } from "../../components/Logotype";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Logotype size={20} desktopSize={40} />
      <Form>
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
        <Link to="/">I already have an account</Link>
      </Form>
    </Container>
  );
}
