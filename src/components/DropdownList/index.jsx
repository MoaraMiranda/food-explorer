import React, { useState } from "react";
import { Container } from "./styles";

export function DropdownList({ options, label }) {
  const [optionSelected, setOptionSelected] = useState(options[0]);

  const handleSelectionChange = (event) => {
    setOptionSelected(event.target.value);
  };

  return (
    <Container>
      <label htmlFor="selection">{label}</label>
      <div className="custom-select">
        <select
          id="selection"
          value={optionSelected}
          onChange={handleSelectionChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </Container>
  );
}
