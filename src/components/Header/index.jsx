import { Container, ReceiptButtonMobile, SignOut } from "./styles";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Logotype } from "../Logotype";
import Receipt from "../../assets/Receipt.svg";
import { Button } from "../Button";
import { Search } from "../Search";
import SignOutButton from "../../assets/SignOutButton.svg";

export function Header({ isAdmin }) {
  return (
    <Container>
      <div className="content containerWrapper">
        <FiMenu color="white" className="menu-icon" />
        <Logotype size={13} desktopSize={16} isAdmin={isAdmin} />
        <Search className="searchDesktop" />
        {!isAdmin && (
          <ReceiptButtonMobile>
            <a href="#">
              <img src={Receipt} alt="receipt image" />
              <div className="numberOfOrders">
                <span>1</span>
              </div>
            </a>
          </ReceiptButtonMobile>
        )}
        <div>
          {!isAdmin ? (
            <Button title="Orders (0)" order className="button" />
          ) : (
            <Button title="New Dish" className="button" />
          )}
        </div>
        <SignOut>
          {/* todo - arrumar o link para funcionar com a AuthRoute */}
          <Link to={"/"}>
            <img src={SignOutButton} alt="Sign Out Button" />
          </Link>
        </SignOut>
      </div>
    </Container>
  );
}
