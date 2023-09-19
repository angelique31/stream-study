import React from "react";
import Image from "next/image";
import {
  Container,
  Title,
  Text,
  VideoContainer,
  StyledImageContainer,
  VideoOverlay,
  StyledBottomDiv,
} from "../WatchOnTv/WatchOnTv.styled";
import { ContentDevice, CenteredFlexContainer } from "./WatchOnDevice.styled";

import DevicePicture from "../../assets/pictures/tv/device-pile.png";

const WatchOnDevice = () => {
  return (
    <>
      <Container>
        <CenteredFlexContainer>
          <VideoContainer>
            <StyledImageContainer>
              <Image
                src={DevicePicture}
                alt="picture TV"
                layout="responsive"
                objectFit="cover"
              />
            </StyledImageContainer>
            <VideoOverlay>
              <video autoPlay muted loop>
                <source
                  src="/assets/videos/video-devices.m4v"
                  type="video/x-m4v"
                />
                Votre navigateur ne prend pas en charge la vidéo.
              </video>
            </VideoOverlay>
          </VideoContainer>

          <ContentDevice>
            <Title>Où que vous soyez</Title>
            <Text>
              Regardez des films et séries en accès illimité sur votre TV,
              smartphone, tablette et ordinateur.
            </Text>
          </ContentDevice>
        </CenteredFlexContainer>
      </Container>
      <StyledBottomDiv></StyledBottomDiv>
    </>
  );
};

export default WatchOnDevice;
