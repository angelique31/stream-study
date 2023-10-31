import React from "react";
import {
  VideoContainer,
  GradientOverlay,
  StyledBackgroundVideo,
  TitleContainer,
  VideoTitle,
} from "./BackgroundVideo.styled";

import InfoButtonComponent from "../InfoButtonComponent/InfoButtonComponent";

const BackgroundVideo = ({ videoPath, title }) => {
  return (
    <>
      <VideoContainer>
        <StyledBackgroundVideo autoPlay loop muted>
          {/* <source src="/assets/videos/backgroundVideo.mp4" type="video/mp4" /> */}
          <source src={videoPath} type="video/mp4" />
        </StyledBackgroundVideo>
        <GradientOverlay></GradientOverlay>
      </VideoContainer>
      <TitleContainer>
        {/* <VideoTitle>{`Plongée dans les profondeurs de l'océan`}</VideoTitle> */}
        <VideoTitle>{title}</VideoTitle>
        <InfoButtonComponent />
      </TitleContainer>
    </>
  );
};

export default BackgroundVideo;
