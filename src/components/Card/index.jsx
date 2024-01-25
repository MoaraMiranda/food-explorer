import { Container } from "./styles";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RxCaretRight } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import Dish from "../../assets/parma-toast.svg";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";

export function Card({ name, id, price, image, description, to }) {
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    navigate("/dish-details/2");
  };
  return (
    <Container to={to}>
      <FiHeart className="heart" />
      <img src={Dish} alt="Picture of the dish" />
      <h1>
        {name} <RxCaretRight />
      </h1>
      <h2>$ {price}</h2>
      <div className="quantity">
        <FaMinus color="white" />
        <span>01</span>
        <FaPlus color="white" />
      </div>
      <Button title="Add" onClick={handleAdd} />
    </Container>
  );
}
