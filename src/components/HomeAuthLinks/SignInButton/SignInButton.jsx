import Link from "next/link";

function SignInButton() {
  return (
    <Link href="/auth/login" passHref>
      {`S'identifier`}
    </Link>
  );
}

export default SignInButton;
