import React from "react";
import Link from "next/link";

import {
  NavBarContainer,
  StyledLink,
  Container,
  TextContainer,
  Title,
  Button,
} from "../SignUpDetails/SignUpDetails.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const Success = () => {
  return (
    <>
      <NavBarContainer>
        <LogoLink />
        <StyledLink>{`S'identifier`}</StyledLink>
      </NavBarContainer>

      <Container>
        <div>
          <TextContainer>
            <Title>Bravo! Votre compte est maintenant actif</Title>
          </TextContainer>
          <div>
            <Link href="/dashboard/home" passHref>
              <Button>Valider</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Success;
