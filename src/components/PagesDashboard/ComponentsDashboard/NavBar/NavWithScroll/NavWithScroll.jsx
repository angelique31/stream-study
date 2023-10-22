import React, { useState, useEffect } from "react";
import { MenuAndSearchWrapper, NavWrapper } from "./NavWithScroll.styled";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import SearchInput from "../SearchInput/SearchInput";

//etat pour gérer le menu au scroll
const NavWithScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavWrapper isScrolled={isScrolled}>
      <NavBarContainer />
      <MenuAndSearchWrapper>
        <SearchInput />
      </MenuAndSearchWrapper>
    </NavWrapper>
  );
};

export default NavWithScroll;
