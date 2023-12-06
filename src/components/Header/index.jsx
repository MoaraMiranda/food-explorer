import { Container, ReceiptButton } from "./styles";
import { FiMenu } from "react-icons/fi";
import { Logotype } from "../Logotype";
import Receipt from "../../assets/Receipt.svg";

export function Header() {
  return (
    <Container>
      <div className="test">
        <FiMenu color="white" />
        <Logotype size={170} />
        <ReceiptButton>
          <a href="#">
            <img src={Receipt} alt="receipt image" />
            <div className="numberOfOrders">
              <span>1</span>
            </div>
          </a>
        </ReceiptButton>
      </div>
    </Container>
  );
}
