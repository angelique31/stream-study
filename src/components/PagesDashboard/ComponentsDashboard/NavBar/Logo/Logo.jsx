import { StyledLink } from "./Logo.styled";
import Link from "next/link";

function Logo() {
  return (
    <>
      <Link href="/" passHref>
        <StyledLink>Study Netifly</StyledLink>
      </Link>
    </>
  );
}

export default Logo;
