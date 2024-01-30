import { Container } from "./styles";
import Image from "../../assets/image-download.svg";

export function DownloadImageButton({ order, title, ...rest }) {
  return (
    <Container {...rest}>
      <img src={Image} alt="receipt image" />
      {title}
    </Container>
  );
}
