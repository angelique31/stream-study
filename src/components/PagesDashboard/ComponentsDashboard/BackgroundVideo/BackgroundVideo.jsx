import React from "react";
import {
  VideoContainer,
  GradientOverlay,
  StyledBackgroundVideo,
  TitleContainer,
  VideoTitle,
} from "./BackgroundVideo.styled";

import InfoButtonComponent from "../InfoButtonComponent/InfoButtonComponent";

const BackgroundVideo = () => {
  return (
    <>
      <VideoContainer>
        <StyledBackgroundVideo autoPlay loop muted>
          <source src="/assets/videos/backgroundVideo.mp4" type="video/mp4" />
        </StyledBackgroundVideo>
        <GradientOverlay></GradientOverlay>
      </VideoContainer>
      <TitleContainer>
        <VideoTitle>{`Plongée dans les profondeurs de l'océan`}</VideoTitle>
        <InfoButtonComponent />
      </TitleContainer>
    </>
  );
};

export default BackgroundVideo;
