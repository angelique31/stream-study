import React, { useState } from "react";
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
import FooterSignUp from "../FooterSignUp/FooterSignUp";
import Loader from "../Loader/Loader";

const Success = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleValidationClick = () => {
    setIsLoading(true);
    // Naviguez vers la page dashboard ou effectuez d'autres actions
  };

  if (isLoading) {
    return <Loader />;
  }
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
              <Button onClick={handleValidationClick}>Valider</Button>
            </Link>
          </div>
        </div>
      </Container>
      <FooterSignUp />
    </>
  );
};

export default Success;
