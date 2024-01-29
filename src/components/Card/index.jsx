import { Container } from "./styles";
import { RxCaretRight } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import Pencil from "../../assets/Pencil.svg";
import Dish from "../../assets/parma-toast.svg";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { Quantity } from "../Quantity";

export function Card({ name, id, price, image, description, to, isAdmin }) {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    navigate("/dish-details/2");
  };
  return (
    <Container to={to}>
      {isAdmin ? (
        <img src={Pencil} alt="pencil edit mode" className="icon" />
      ) : (
        <FiHeart className="icon" />
      )}
      <img src={Dish} alt="Picture of the dish" className="dish-image" />
      <h1>
        {name} <RxCaretRight />
      </h1>
      <h2> € {price}</h2>
      {!isAdmin && <Quantity />}
      {!isAdmin && <Button title="Add" onClick={handleAdd} />}
    </Container>
  );
}
