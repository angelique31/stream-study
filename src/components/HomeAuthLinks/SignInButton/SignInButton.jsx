// import Link from "next/link";
import { UnderlineLink, StyledLink } from "./SignInButton.styled";

function SignInButton() {
  return (
    // <Link href="/auth/login" passHref>
    //   {`S'identifier`}
    // </Link>

    <div>
      <UnderlineLink href="/auth/login" passHref>
        <StyledLink> {`S'identifier`}</StyledLink>
      </UnderlineLink>
    </div>
  );
}

export default SignInButton;
