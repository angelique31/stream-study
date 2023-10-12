import React, { useState } from "react";
import { StyledBackgroundVideo } from "./BackgroundVideo.styled";

const BackgroundVideo = () => {
  // const [videoId, setVideoId] = useState("dQw4w9WgXcQ"); // ID de la vidéo YouTube

  return (
    <StyledBackgroundVideo autoPlay loop muted>
      <source src="/assets/videos/backgroundVideo.mp4" type="video/mp4" />
    </StyledBackgroundVideo>
  );
};

export default BackgroundVideo;
