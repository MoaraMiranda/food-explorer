import {Container } from "./styles"
import { Card } from "../Card";


export function CardList({ title }){
const products = [
  {
    name: "Parma toast",
    id: 1,
    price: "10,00",
    image: "??",
    description: "plate description",
  },
  {
    name: "Parma toast",
    id: 1,
    price: "10,00",
    image: "??",
    description: "plate description",
  },
];
return (
  <Container>
      <h2>{title}</h2>
      <div className="list">
        {products.map((product) => (
          <Card {...product} />
        ))}
      </div>
  </Container>
);

}