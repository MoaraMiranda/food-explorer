import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Logotype } from "../../components/Logotype";

export function SignIn() {
  return (
    <Container>
      <Logotype size={20} desktopSize={40} />
      <Form>
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
        <Link to="/register">Create your account</Link>
      </Form>
    </Container>
  );
}
