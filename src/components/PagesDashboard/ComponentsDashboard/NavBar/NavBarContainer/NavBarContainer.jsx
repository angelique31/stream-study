import React, { useState } from "react";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../NavLinks/NavLinks";

function NavBarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log("Bouton MenuHamburger cliqué, état actuel d'isOpen:", isOpen);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuHamburger onClick={toggleMenu} isOpen={isOpen} />

      <NavLinks isOpen={isOpen} />
    </>
  );
}

export default NavBarContainer;
