import React, { useState } from "react";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../NavLinks/NavLinks";
import { Overlay } from "../NavLinks/NavLinks.styled";

function NavBarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={toggleMenu}>Test Toggle</button> {/* Bouton de test */}
      <MenuHamburger onClick={toggleMenu} isOpen={isOpen} />
      {/* <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} /> */}
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <NavLinks isOpen={isOpen} />
    </>
  );
}

export default NavBarContainer;
