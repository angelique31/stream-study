import React from "react";
import Link from "next/link";
import { NavContainer, StyledLink } from "./NavLinks.styled";

function NavLinks() {
  return (
    <>
      <NavContainer>
        <Link href="/dashboard/home" passHref>
          <StyledLink>Accueil</StyledLink>
        </Link>
        <Link href="/dashboard/series" passHref>
          <StyledLink>Séries</StyledLink>
        </Link>
        <Link href="/dashboard/movies" passHref>
          <StyledLink>Films</StyledLink>
        </Link>
        <Link href="/dashboard/latest" passHref>
          <StyledLink>Nouveautés les plus regardées</StyledLink>
        </Link>
        <Link href="/dashboard/my-list" passHref>
          <StyledLink>Ma liste</StyledLink>
        </Link>
      </NavContainer>
    </>
  );
}

export default NavLinks;
