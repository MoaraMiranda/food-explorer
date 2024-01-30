import { Container } from "./styles";
import { Tag } from "../Tag";

export function TagsGroup() {
  const tags = [
    {
      name: "Radishes",
      id: 1,
    },
    {
      name: "Lettuce",
      id: 2,
    },
    {
      name: "Tomato",
      id: 3,
    },
    {
      name: "Onion",
      id: 4,
    },
    {
      name: "Olives",
      id: 5,
    },
    {
      name: "Parmesan cheese",
      id: 6,
    },
    {
      name: "White bread",
      id: 7,
    },
  ];

  return (
    <Container>
      {tags.map((tag) => (
        <Tag key={String(tag.id)} title={tag.name} />
      ))}
    </Container>
  );
}
