import React, { useState } from "react";
import Image from "next/image";

import {
  DropdownContainer,
  DropdownButton as StyledButton,
  IconContainer,
  DropdownContent,
  DropdownItem,
} from "./DropdownButton.styled";

import LanguageIcon from "../../../assets/icons/language.svg";

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
      <StyledButton onClick={toggleDropdown}>
        <IconContainer>
          <Image src={LanguageIcon} alt="Icon des langues anglais/français" />
          {/* {selectedLanguage} */}
          <span>{selectedLanguage}</span>
        </IconContainer>
      </StyledButton>

      <DropdownContent show={showDropdown}>
        <DropdownItem
          onClick={() => handleLanguageClick("Français")}
          selected={selectedLanguage === "Français"} // Passe 'true' si c'est la langue sélectionnée, sinon 'false'
        >
          Français
        </DropdownItem>

        <DropdownItem
          onClick={() => handleLanguageClick("English")}
          selected={selectedLanguage === "English"} // Passe 'true' si c'est la langue sélectionnée, sinon 'false'>
        >
          English
        </DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};

export default DropdownButton;
