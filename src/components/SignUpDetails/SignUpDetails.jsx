import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  NavBarContainer,
  StyledLink,
  Container,
  CenteredContainer,
  StyledImageContainer,
  StyledSpan,
  TextContainer,
  Title,
  Paragraph,
  Button,
} from "./SignUpDetails.styled";
import LogoLink from "../HomeAuthLinks/LogoLink/LogoLink";
import AcountLogo from "../../assets/logos/acountLogo.png";

const SignUpDetail = () => {
  return (
    <>
      <NavBarContainer>
        <LogoLink />

        <StyledLink>{`S'identifier`}</StyledLink>
      </NavBarContainer>

      <Container>
        <div>
          <CenteredContainer>
            <StyledImageContainer>
              <Image
                src={AcountLogo}
                alt="Logo"
                layout="responsive"
                objectFit="cover"
              />
            </StyledImageContainer>
            <StyledSpan>ETAPE 1 SUR 3</StyledSpan>
          </CenteredContainer>
          <TextContainer>
            <Title>Complétez la configuration de votre compte.</Title>
            <Paragraph>
              Study Netifly est personnalisé selon vos goûts. Créez un mot de
              passe pour commencer à regarder Study Netifly.
            </Paragraph>
          </TextContainer>
          <div>
            <Link href="/auth/signup/signup" passHref>
              <Button>Suivant</Button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUpDetail;
