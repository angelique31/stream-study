import Link from "next/link";
import { StyledLink } from "./SignInButton.styled";

function SignInButton() {
  return (
    <div>
      <Link href="/auth/login" passHref>
        <StyledLink>{`S'identifier`}</StyledLink>
      </Link>
    </div>
  );
}

export default SignInButton;
