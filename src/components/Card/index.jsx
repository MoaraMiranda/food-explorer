import { Container } from "./styles";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { PiCaretRightBold } from "react-icons/pi";
import { RxCaretRight } from "react-icons/rx";
import { FiHeart } from "react-icons/fi";
import Dish from "../../assets/parma-toast.svg";
import { Button } from "../Button";

export function Card({ name, id, price, image, description }) {
  return (
    <Container>
      <FiHeart className="heart" />
      <img src={Dish} alt="Picture of the dish" />
      <h1>
        {name} <RxCaretRight />
      </h1>
      <h2>$ {price}</h2>
      <div className="quantity">
        <FaMinus />
        <span>01</span>
        <FaPlus color="white" />
      </div>
      <Button title="Add" />
    </Container>
  );
}
