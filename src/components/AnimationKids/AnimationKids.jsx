import React from "react";
import Image from "next/image";
import {
  Container,
  CenteredFlexContainer,
  Content,
  Title,
  Text,
  VideoContainer,
  StyledImageContainer,
  StyledBottomDiv,
} from "../WatchOnTv/WatchOnTv.styled";

import CardAnimationKids from "../../assets/pictures/card-animation-kids.png";

const AnimationKids = () => {
  return (
    <>
      <Container>
        <CenteredFlexContainer>
          <Content>
            <Title>Créez des profils pour les enfants</Title>
            <Text>
              Les enfants découvrent de nouvelles aventures et retrouvent leurs
              personnages préférés dans un espace bien à eux, déjà inclus dans
              votre abonnement.
            </Text>
          </Content>

          <VideoContainer>
            <StyledImageContainer>
              <Image
                src={CardAnimationKids}
                alt="picture kids"
                layout="responsive"
                objectFit="cover"
              />
            </StyledImageContainer>
          </VideoContainer>
        </CenteredFlexContainer>
      </Container>
      <StyledBottomDiv></StyledBottomDiv>
    </>
  );
};

export default AnimationKids;
