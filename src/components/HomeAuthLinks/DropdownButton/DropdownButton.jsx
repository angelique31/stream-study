import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton as StyledButton,
  DropdownContent,
  DropdownItem,
} from "./DropdownButton.styled";

const DropdownButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <DropdownContainer>
      <StyledButton onClick={toggleDropdown}>Langue</StyledButton>
      <DropdownContent show={showDropdown}>
        <DropdownItem href="#">Anglais</DropdownItem>
        <DropdownItem href="#">Français</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownButton;
