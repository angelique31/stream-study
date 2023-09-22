import React from "react";
import Link from "next/link";

import {
  NavBarContainer,
  StyledLink,
  Container,
  MarginLeftDiv,
  CenteredContainer,
  StyledSpan,
  TextContainer,
  StyledInput,
  Title,
  Paragraph,
} from "./SignUp.styled";

import { Button } from "../SignUpDetails/SignUpDetails.styled";

import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";

const SignUp = () => {
  return (
    <>
      <NavBarContainer>
        <LogoLink />
        <StyledLink>{`S'identifier`}</StyledLink>
      </NavBarContainer>

      <Container>
        <MarginLeftDiv>
          <CenteredContainer>
            <StyledSpan>ETAPE 1 SUR 3</StyledSpan>
          </CenteredContainer>
          <TextContainer>
            <Title>Créez un mot de passe pour activer votre abonnement</Title>
            <Paragraph>
              {`Plus que quelques étapes et c'est fini !
                Plus rien à remplir.`}
            </Paragraph>
          </TextContainer>
          <StyledInput
            type="email"
            placeholder="Adresse e-mail"
            autocomplete="off"
          />
          <StyledInput
            type="password"
            placeholder="Mot de passe"
            autocomplete="new-password"
          />
          <div>
            <Link href="/auth/signup/signup" passHref>
              <Button>Suivant</Button>
            </Link>
          </div>
        </MarginLeftDiv>
      </Container>
    </>
  );
};

export default SignUp;
