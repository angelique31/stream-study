import { StyledLink } from "./LogoLink.styled";
import Link from "next/link";

function LogoLink() {
  return (
    <div>
      <Link href="/" passHref>
        <StyledLink>Study Netifly</StyledLink>
      </Link>
    </div>
  );
}

export default LogoLink;
