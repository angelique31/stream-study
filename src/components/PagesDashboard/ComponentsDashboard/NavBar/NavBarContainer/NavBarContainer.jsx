import { useState, useEffect } from "react";
import MenuHamburger from "../MenuHamburger/MenuHamburger";
import NavLinks from "../NavLinks/NavLinks";
import { Overlay } from "../NavLinks/NavLinks.styled";
import { LogoContainer } from "./NavBarContainer.styled";

import Logo from "../Logo/Logo";

function NavBarContainer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <LogoContainer>
        <MenuHamburger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <Logo />
      </LogoContainer>
      <Overlay $isOpen={isOpen} onClick={() => setIsOpen(false)} />
      <NavLinks closeMenu={() => setIsOpen(false)} isOpen={isOpen} />
    </>
  );
}

export default NavBarContainer;
