import React from "react";
import Link from "next/link";
import { NavContainer, StyledNavItem, StyledLink } from "./NavLinks.styled";

function NavLinks({ isOpen }) {
  return (
    <>
      <NavContainer $isOpen={isOpen}>
        <StyledNavItem>
          <Link href="/dashboard/home" passHref>
            <StyledLink>Accueil</StyledLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/dashboard/series" passHref>
            <StyledLink>Séries</StyledLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/dashboard/movies" passHref>
            <StyledLink>Films</StyledLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/dashboard/latest" passHref>
            <StyledLink>Nouveautés</StyledLink>
          </Link>
        </StyledNavItem>

        <StyledNavItem>
          <Link href="/dashboard/my-list" passHref>
            <StyledLink>Ma liste</StyledLink>
          </Link>
        </StyledNavItem>
      </NavContainer>
    </>
  );
}

export default NavLinks;
