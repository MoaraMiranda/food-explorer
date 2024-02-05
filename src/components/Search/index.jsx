import { Container } from "./styles";
import { Input } from "../Input";
import { MdOutlineSearch } from "react-icons/md";

export function Search({ className }) {
  return (
    <Container className={className}>
      <Input
        placeholder="Search for dishes and ingredients"
        type="search"
        icon={MdOutlineSearch}
      />
    </Container>
  );
}
