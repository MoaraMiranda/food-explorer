import { Container } from "./styles";
import { Input } from "../Input";
import { FaSearch } from "react-icons/fa";

export function Search({ className }) {
  return (
    <Container className={className}>
      <Input
        placeholder="Search for dishes and ingredients"
        type="search"
        icon={FaSearch}
      />
    </Container>
  );
}
