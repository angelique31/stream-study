import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  showTooltip,
  hideTooltip,
  showInfosTooltip,
  hideInfosTooltip,
} from "../../../../store/actions/tooltipActions";
import { openModal, closeModal } from "../../../../store/actions/modalActions";

import SwipeableContainer from "../../../SwipeableContainer/SwipeableContainer";

import {
  TrendingContainer,
  SeriesTitle,
  ArrowContainer,
  TrendingWrapper,
  TrendingList,
  TrendingItem,
  ActionButtons,
  IconContainer,
  VideoWrapper,
  NoVideoText,
  TitleOverlay,
  ImageWrapper,
  OverviewWrapper,
  TooltipWrapper,
  Tooltip,
  ScrollContainer,
} from "./CategorySeries.styled";

import ModalVideo from "../ModalVideo/ModalVideo";

import IconPlus from "../../../../assets/icons/plus.svg";
import ArrowIcon from "../../../../assets/icons/arrowIcon/arrowIcon.svg";

import ScrollingArrows from "../ScrollingArrows/ScrollingArrows";

import useImagesPerPage from "../UseImagesPerPage/UseImagesPerPage";

import defautImage from "../../../../assets/pictures/boxshot.png";

import ImageLoader from "../ImageLoader/ImageLoader";

function CategorySeries({ title, data }) {
  const dispatch = useDispatch();

  // ------- Tooltip -------
  // Récupération de l'état des tooltips depuis le store Redux
  const { tooltipVisible, infosTooltipVisible } = useSelector(
    (state) => state.tooltip
  );

  // ------- Modale Vidéo -------
  // Récupération de l'état de la modale depuis le store Redux
  const { showModal, currentVideo, currentOverview } = useSelector(
    (state) => state.modal
  );

  // Gestion de l'état local pour le chemin de l'affiche (poster) actuelle
  const [currentPoster, setCurrentPoster] = useState(null);

  // Ouverture de la modale et mise à jour de l'affiche actuelle
  const handleOpenModal = (videoId, overview, posterPath) => {
    setCurrentPoster(posterPath);
    dispatch(openModal(videoId, overview, posterPath));
  };

  // Fermeture de la modale et réinitialisation de l'affiche
  const handleCloseModal = () => {
    setCurrentPoster(null);
    dispatch(closeModal());
  };

  // Détermine si on utilise l'image par défaut locale ou la récupérer depuis l'API en fonction de la présence de `currentPoster`
  const useLocalImage = !currentPoster;
  const posterPath = useLocalImage
    ? "/assets/boxshot.png"
    : `https://image.tmdb.org/t/p/w500${currentPoster}`;

  // ------- Affichage des flèches -------
  // Gestion de l'état local pour l'affichage des flèches
  const [showArrows, setShowArrows] = useState(false);
  // Met à jour l'état d'affichage des flèches
  const updateShowArrows = (value) => {
    setShowArrows(value);
  };

  // ------- Pagination des Séries -------
  // Gestion de l'index actuel des séries affichées
  const [currentIndex, setCurrentIndex] = useState(0);

  // Récupération du nombre d'images par page et de la visibilité
  const { imagesPerPage, isVisible } = useImagesPerPage();

  // Découpage de la liste des séries à afficher
  const displayedSeries = data.slice(
    currentIndex,
    currentIndex + imagesPerPage
  );

  //faire défiler  les images avec le doigt
  const handlePrev = () => {
    setCurrentIndex((oldIndex) => Math.max(oldIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) =>
      Math.min(oldIndex + 1, data.length - imagesPerPage)
    );
  };

  return (
    <div>
      {isVisible ? (
        <>
          <SeriesTitle noPadding={title === "Tendances de la semaine"}>
            {title}
          </SeriesTitle>

          <TrendingContainer noPaddingTop={title === "Tendances de la semaine"}>
            {showModal && (
              <ModalVideo
                videoId={currentVideo}
                overview={currentOverview}
                onClose={handleCloseModal}
                posterImage={posterPath}
              />
            )}
            <ArrowContainer>
              <TrendingWrapper
                onMouseEnter={() => setShowArrows(true)}
                onMouseLeave={() => setShowArrows(false)}
              >
                <ScrollingArrows
                  series={data}
                  currentIndex={currentIndex}
                  setCurrentIndex={setCurrentIndex}
                  onShowArrows={true}
                  showArrows={showArrows}
                  updateShowArrows={updateShowArrows}
                />

                <SwipeableContainer
                  onSwipeLeft={handleNext}
                  onSwipeRight={handlePrev}
                >
                  <ScrollContainer>
                    <TrendingList>
                      {displayedSeries.map((serie) => (
                        <TrendingItem
                          key={serie.id}
                          onClick={() =>
                            handleOpenModal(
                              serie.video,
                              serie.overview,
                              serie.poster_path
                            )
                          }
                        >
                          <ImageWrapper>
                            <ImageLoader
                              className="cover"
                              src={
                                serie.poster_path
                                  ? `https://image.tmdb.org/t/p/w500${serie.poster_path}`
                                  : defautImage
                              }
                              alt={"picture series"}
                              width={250}
                              height={150}
                            />

                            <TitleOverlay>
                              {serie.name || serie.original_title}
                            </TitleOverlay>
                          </ImageWrapper>

                          <VideoWrapper>
                            {serie.video ? (
                              <iframe
                                src={`https://www.youtube.com/embed/${serie.video}`}
                                title={`Vidéo de ${serie.name}`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <NoVideoText>Pas de vidéo disponible</NoVideoText>
                            )}
                          </VideoWrapper>

                          <OverviewWrapper>
                            <ActionButtons className="action-buttons">
                              <IconContainer>
                                <TooltipWrapper>
                                  <Image
                                    src={IconPlus}
                                    alt="Icon Plus"
                                    width={20}
                                    height={20}
                                    onMouseEnter={() => {
                                      dispatch(showTooltip());
                                    }}
                                    onMouseLeave={() => {
                                      dispatch(hideTooltip());
                                    }}
                                  />

                                  {tooltipVisible && (
                                    <Tooltip>Ajouter à ma liste</Tooltip>
                                  )}
                                </TooltipWrapper>
                              </IconContainer>

                              <IconContainer>
                                <Image
                                  className="arrow-down-icon"
                                  src={ArrowIcon}
                                  alt="Arrow Icon"
                                  width={25}
                                  height={15}
                                  onMouseEnter={() =>
                                    dispatch(showInfosTooltip())
                                  }
                                  onMouseLeave={() =>
                                    dispatch(hideInfosTooltip())
                                  }
                                />
                                {infosTooltipVisible && (
                                  <Tooltip>{`Plus d'infos`}</Tooltip>
                                )}
                              </IconContainer>
                            </ActionButtons>
                          </OverviewWrapper>
                        </TrendingItem>
                      ))}
                    </TrendingList>
                  </ScrollContainer>
                </SwipeableContainer>
              </TrendingWrapper>
            </ArrowContainer>
          </TrendingContainer>
        </>
      ) : null}
    </div>
  );
}

export default CategorySeries;
