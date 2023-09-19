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
  VideoOverlay,
} from "./WatchOnTv.styled";

import TV from "../../assets/pictures/tv/tv.png";

const WatchOnTv = () => {
  return (
    <Container>
      <CenteredFlexContainer>
        <Content>
          <Title>Regardez Netflix sur votre TV</Title>
          <Text>
            Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast,
            Apple TV, lecteur Blu-ray et bien plus.
          </Text>
        </Content>

        <VideoContainer>
          <StyledImageContainer>
            <Image
              src={TV}
              alt="picture TV"
              // width={480}
              // height={320}

              layout="responsive"
              objectFit="cover"
            />
          </StyledImageContainer>
          <VideoOverlay>
            <video autoPlay muted loop>
              <source
                src="/assets/videos/video-tv-0819.m4v"
                type="video/x-m4v"
              />
              Votre navigateur ne prend pas en charge la vidéo.
            </video>
          </VideoOverlay>
        </VideoContainer>
      </CenteredFlexContainer>
    </Container>
  );
};

export default WatchOnTv;
