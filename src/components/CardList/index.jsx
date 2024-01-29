import { Container } from "./styles";
import { Card } from "../Card";

export function CardList({ title, isAdmin }) {
  const products = [
    {
      name: "Parma toast",
      id: 1,
      price: "10,00",
      image: "??",
      description: "plate description",
    },
    {
      name: "Tuna Salad",
      id: 2,
      price: "45,00",
      image: "??",
      description: "plate description",
    },
  ];

  const link = isAdmin ? "/admin/dish-details/:id" : "/dish-details/1";

  return (
    <Container>
      <h2>{title}</h2>
      <div className="list">
        {products.map((product) => (
          <Card to={link} key={product.id} {...product} isAdmin={isAdmin} />
        ))}
      </div>
    </Container>
  );
}
