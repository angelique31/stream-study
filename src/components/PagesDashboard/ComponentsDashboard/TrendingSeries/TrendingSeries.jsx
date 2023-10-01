import React, { useState } from "react";
import Image from "next/image";
import {
  TrendingContainer,
  TrendingWrapper,
  TrendingList,
  TrendingItem,
  ActionButtons,
  IconContainer,
  VideoWrapper,
  TitleOverlay,
  ImageWrapper,
  OverviewWrapper,
  TooltipWrapper,
  Tooltip,
  ScrollContainer,
} from "./TrendingSeries.styled";

import ModalVideo from "../ModalVideo/ModalVideo";

import IconPlus from "../../../../assets/icons/plus.svg";
import ArrowIcon from "../../../../assets/icons/arrowIcon/arrowIcon.svg";

import ArrowLeftIcon from "@/assets/icons/arrowIcon/arrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/arrowIcon/ArrowRightIcon";

function TrendingSeries({ series }) {
  const [showTooltip, setShowTooltip] = useState(false);
  //modale video
  const [showModal, setShowModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentOverview, setCurrentOverview] = useState("");

  const handleOpenModal = (videoId, overview) => {
    setCurrentVideo(videoId);
    setCurrentOverview(overview);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Caroussel pour le défilement des images horizontalement
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScrollLeft = () => {
    // Modifier cette valeur si nécessaire pour ajuster le défilement
    const widthToScroll = 260; // Largeur approximative d'une image plus les marges/gaps
    setScrollPosition(scrollPosition - widthToScroll);
  };

  const handleScrollRight = () => {
    const widthToScroll = 260;
    setScrollPosition(scrollPosition + widthToScroll);
  };

  return (
    <TrendingContainer>
      <h2>Tendances de la semaine (Séries)</h2>
      {showModal && (
        <ModalVideo
          videoId={currentVideo}
          overview={currentOverview}
          onClose={handleCloseModal}
        />
      )}
      <TrendingWrapper>
        <div onClick={handleScrollLeft}>
          <ArrowLeftIcon color="red" size="40" />
        </div>

        <ScrollContainer scrollPosition={scrollPosition}>
          <TrendingList>
            {series.map((serie) => (
              <TrendingItem
                key={serie.id}
                onClick={() => handleOpenModal(serie.video, serie.overview)}
              >
                <ImageWrapper>
                  {serie.poster_path && (
                    <Image
                      className="cover"
                      src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                      alt={serie.name}
                      width={250}
                      height={150}
                    />
                  )}
                  <TitleOverlay>{serie.name}</TitleOverlay>
                </ImageWrapper>

                <VideoWrapper>
                  {serie.video && (
                    <iframe
                      src={`https://www.youtube.com/embed/${serie.video}`}
                      title={`Vidéo de ${serie.name}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </VideoWrapper>

                <OverviewWrapper>
                  <ActionButtons className="action-buttons">
                    <IconContainer>
                      <TooltipWrapper>
                        <Image
                          src={IconPlus}
                          alt="Icon Plus"
                          width={25}
                          height={15}
                          onMouseEnter={() => {
                            setShowTooltip(true);
                          }}
                          onMouseLeave={() => {
                            setShowTooltip(false);
                          }}
                        />
                        {showTooltip && <Tooltip>Ajouter à ma liste</Tooltip>}
                      </TooltipWrapper>
                    </IconContainer>

                    <IconContainer>
                      <Image
                        className="arrow-down-icon"
                        src={ArrowIcon}
                        alt="Arrow Icon"
                        width={25}
                        height={15}
                      />
                    </IconContainer>
                  </ActionButtons>
                </OverviewWrapper>
              </TrendingItem>
            ))}
          </TrendingList>
        </ScrollContainer>
        <div onClick={handleScrollRight}>
          <ArrowRightIcon color="red" size="40" />
        </div>
      </TrendingWrapper>
    </TrendingContainer>
  );
}

export default TrendingSeries;
