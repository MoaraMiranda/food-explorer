import { Container, ReceiptButton } from "./styles";
import { FiMenu } from "react-icons/fi";
import { Logotype } from "../Logotype";
import Receipt from "../../assets/Receipt.svg";
import { Button } from "../Button";
import { Search } from "../Search";

export function Header() {
  return (
    <Container>
      <div className="content">
        <FiMenu color="white" />
        <Logotype size={12} desktopSize={15} />
        <Search />
        <ReceiptButton>
          <a href="#">
            <img src={Receipt} alt="receipt image" />
            <div className="numberOfOrders">
              <span>1</span>
            </div>
          </a>
        </ReceiptButton>
        <Button title="Orders (0)" order className="button" />
      </div>
    </Container>
  );
}
