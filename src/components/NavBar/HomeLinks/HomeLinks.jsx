import Link from "next/link";
import {
  DropdownContainer,
  DropdownMenu,
  DropdownToggle,
  StyledLink,
} from "./HomeLinks.styled";

function HomeLinks() {
  return (
    <nav>
      {/* <Link href="/">
        <StyledLink>StreamStudy</StyledLink>
      </Link> */}

      <DropdownContainer>
        <Link href="/">
          <DropdownToggle>
            Accueil <span>&darr;</span>
          </DropdownToggle>
        </Link>
        <DropdownMenu>
          <Link href="/tout">
            <StyledLink>Tout</StyledLink>
          </Link>
          <Link href="/films">
            <StyledLink>Films</StyledLink>
          </Link>
          <Link href="/series">
            <StyledLink>Séries</StyledLink>
          </Link>
          <Link href="/sport">
            <StyledLink>Sport</StyledLink>
          </Link>
        </DropdownMenu>
      </DropdownContainer>
      {/* ... autres liens ... */}
    </nav>
  );
}

export default HomeLinks;
