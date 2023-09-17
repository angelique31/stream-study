import { UnderlineLink, StyledLink } from "./LogoLink.styled";
// import Link from "next/link";

function LogoLink() {
  return (
    <div>
      <UnderlineLink href="/" passHref>
        <StyledLink>Study Netifly</StyledLink>
      </UnderlineLink>
    </div>
  );
}

export default LogoLink;
