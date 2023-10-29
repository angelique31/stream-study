import React from "react";
import Image from "next/image";
import {
  ModalOverlay,
  ModalContainer,
  ModalCloseButton,
  VideoFrame,
  Overview,
  ImageContainer,
  NoVideoText,
} from "./ModalVideo.styled";

const ModalVideo = ({ videoId, overview, posterImage, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

        {videoId ? (
          <VideoFrame
            src={`https://www.youtube.com/embed/${videoId}`}
            height={400}
            allowFullScreen
          />
        ) : (
          // <p style={{ textAlign: "center", padding: "20px", color: "white" }}>
          //   Pas de vidéo disponible
          // </p>

          <ImageContainer>
            <Image
              className="cover"
              src={posterImage}
              alt={"images de films"}
              layout="fill"
              objectFit="cover"
            />
            <NoVideoText>
              {`Oops ! Le film n'a pas encore sa bande-annonce. Pourquoi ne pas lire le résumé en attendant ?`}
            </NoVideoText>
          </ImageContainer>
        )}

        <Overview>{overview}</Overview>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ModalVideo;
