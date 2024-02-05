import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function TagsController({ $isNew, value, onClick, ...rest }) {
  return (
    <Container $isNew={$isNew}>
      {$isNew ? (
        <input type="text" value={value} readOnly={!$isNew} {...rest} />
      ) : (
        <span>{rest.placeholder}</span>
      )}

      <button type="button" onClick={onClick}>
        {$isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
