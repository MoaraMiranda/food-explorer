import React, { useState } from "react";
import { Container } from "./styles";

export function DropdownList({ options, label }) {
  const [optionSelected, setOptionSelected] = useState(options[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectionChange = (event) => {
    setOptionSelected(event.target.value);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Container>
      <label htmlFor="selection">{label}</label>
      <div className={`custom-select ${isDropdownOpen ? "open" : ""}`}>
        <select
          id="selection"
          value={optionSelected}
          onChange={handleSelectionChange}
          onClick={handleDropdownToggle}
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
