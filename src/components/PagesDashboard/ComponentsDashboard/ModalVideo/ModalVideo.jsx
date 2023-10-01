import React from "react";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  VideoFrame,
  Overview,
} from "./ModalVideo.styled";

const ModalVideo = ({ videoId, overview, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
        <VideoFrame
          src={`https://www.youtube.com/embed/${videoId}`}
          height={400}
          allowFullScreen
        />
        <Overview>{overview}</Overview>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalVideo;
