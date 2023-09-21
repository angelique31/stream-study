import Link from "next/link";
import { StyledLink } from "./SignInButton.styled";

function SignInButton() {
  return (
    <>
      <Link href="/auth/login" passHref>
        <StyledLink>{`S'identifier`}</StyledLink>
      </Link>
    </>
  );
}

export default SignInButton;
