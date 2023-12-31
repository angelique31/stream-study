import React from "react";
import Image from "next/image";
import {
  Container,
  Content,
  Title,
  Text,
  StyledImageContainer,
  StyledBottomDiv,
} from "../WatchOnTv/WatchOnTv.styled";

import {
  CenteredFlexContainer,
  VideoContainer,
  MobilePictureContainer,
  PictureBoxShot,
  MobileContainer,
  StyledH3,
  StyledSpan,
  StyledDownloadTitle,
} from "./DownloadSeries.styled";

import MobilePicture from "../../assets/pictures/mobile-0819.jpg";
import BoxShot from "../../assets/pictures/boxshot.png";
import DownloadGif from "../../assets/pictures/download-icon.gif";

const DownloadSeries = () => {
  return (
    <>
      <Container>
        <CenteredFlexContainer>
          <VideoContainer>
            <StyledImageContainer>
              <MobilePictureContainer>
                <Image
                  src={MobilePicture}
                  alt="picture mobile"
                  layout="responsive"
                  objectFit="cover"
                />
              </MobilePictureContainer>
              <MobileContainer>
                <PictureBoxShot>
                  <Image
                    src={BoxShot}
                    alt="picture strange things"
                    layout="responsive"
                    objectFit="cover"
                  />
                </PictureBoxShot>
                <StyledDownloadTitle>
                  <StyledH3>Stranger Things</StyledH3>
                  <StyledSpan>Téléchargement en cours...</StyledSpan>
                </StyledDownloadTitle>
                <div>
                  <Image
                    src={DownloadGif}
                    alt="picture mobile"
                    width={48}
                    height={48}
                    // layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </MobileContainer>
            </StyledImageContainer>
          </VideoContainer>

          <Content>
            <Title>
              Téléchargez vos séries pour les regarder hors connexion
            </Title>
            <Text>Uniquement disponible dans les offres sans pub.</Text>
          </Content>
        </CenteredFlexContainer>
      </Container>
      <StyledBottomDiv></StyledBottomDiv>
    </>
  );
};

export default DownloadSeries;
