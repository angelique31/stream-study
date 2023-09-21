import { StyledLink } from "./LogoLink.styled";
import Link from "next/link";

function LogoLink() {
  return (
    <>
      <Link href="/" passHref>
        <StyledLink>Study Netifly</StyledLink>
      </Link>
    </>
  );
}

export default LogoLink;
