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

  //gérer l'arrêt du défilemnt a la dernière image
  const [showLeftArrow, setShowLeftArrow] = useState(true);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // const handleScrollRight = () => {
  //   const widthToScroll = 260;
  //   const totalWidth = series.length * widthToScroll;

  //   if (scrollPosition + widthToScroll >= totalWidth - widthToScroll * 4) {
  //     // Ajustement ici pour 4 images à la fois
  //     setShowRightArrow(false); // Cache la flèche de droite
  //   } else {
  //     setScrollPosition(scrollPosition + widthToScroll);
  //     setShowLeftArrow(true); // Assurez-vous que la flèche de gauche est visible
  //   }
  // };

  const handleScrollRight = () => {
    const widthToScroll = 266;
    const totalWidth = series.length * widthToScroll;

    if (scrollPosition + 2 * widthToScroll >= totalWidth - widthToScroll * 3) {
      // Ajustement ici
      // Ajustez la position de défilement pour que les 4 dernières images soient entièrement visibles
      setScrollPosition(totalWidth - widthToScroll * 4);
      setShowRightArrow(false); // Cache la flèche de droite
    } else {
      setScrollPosition(scrollPosition + widthToScroll);
      setShowLeftArrow(true); // Assurez-vous que la flèche de gauche est visible
    }
  };

  const handleScrollLeft = () => {
    const widthToScroll = 266;

    if (scrollPosition - widthToScroll <= 0) {
      // Si le défilement à gauche nous ramène au début
      setScrollPosition(0); // Réinitialisez la position de défilement à 0
      setShowLeftArrow(false); // Cachez la flèche de gauche
    } else {
      setScrollPosition(scrollPosition - widthToScroll);
      setShowRightArrow(true); // Assurez-vous que la flèche de droite est visible
    }
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
        {/* <div onClick={handleScrollLeft}>
          <ArrowLeftIcon color="red" size="40" />
        </div> */}

        {showLeftArrow && (
          <div onClick={handleScrollLeft}>
            <ArrowLeftIcon color="red" size="40" />
          </div>
        )}

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
        {/* <div onClick={handleScrollRight}>
          <ArrowRightIcon color="red" size="40" />
        </div> */}

        {showRightArrow && (
          <div onClick={handleScrollRight}>
            <ArrowRightIcon color="red" size="40" />
          </div>
        )}
      </TrendingWrapper>
    </TrendingContainer>
  );
}

export default TrendingSeries;
