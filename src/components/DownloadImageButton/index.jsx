import { Container } from "./styles";
import ImageDownload from "../../assets/image-download.svg";

export function DownloadImageButton({ order, title, ...rest }) {
  return (
    <Container {...rest}>
      <label htmlFor="download-image">Dish image</label>
      <button id="download-image">
        <img src={ImageDownload} alt="receipt image" />
        {title}
      </button>
    </Container>
  );
}
