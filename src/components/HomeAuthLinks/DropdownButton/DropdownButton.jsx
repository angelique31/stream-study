import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownButton as StyledButton,
  DropdownContent,
  DropdownItem,
} from "./DropdownButton.styled";

const DropdownButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Français");
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLanguageClick = (language) => {
    setSelectedLanguage(language);
    toggleDropdown(); // Ferme le menu déroulant après avoir sélectionné une langue
  };

  return (
    <DropdownContainer>
      <StyledButton onClick={toggleDropdown}>{selectedLanguage}</StyledButton>
      <DropdownContent show={showDropdown}>
        <DropdownItem
          onClick={() => handleLanguageClick("Français")}
          selected={selectedLanguage === "Français"} // Passe 'true' si c'est la langue sélectionnée, sinon 'false'
        >
          Français
        </DropdownItem>

        <DropdownItem
          onClick={() => handleLanguageClick("Anglais")}
          selected={selectedLanguage === "Anglais"} // Passe 'true' si c'est la langue sélectionnée, sinon 'false'>
        >
          Anglais
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownButton;
