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

import ScrollingArrows from "../ScrollingArrows/ScrollingArrows";

function TrendingSeries({ series }) {
  const dispatch = useDispatch();

  //tooltip
  const { tooltipVisible, infosTooltipVisible } = useSelector(
    (state) => state.tooltip
  );

  //modale video
  const { showModal, currentVideo, currentOverview } = useSelector(
    (state) => state.modal
  );

  const handleOpenModal = (videoId, overview) => {
    dispatch(openModal(videoId, overview));
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const [showArrows, setShowArrows] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [imagesPerPage, setImagesPerPage] = useState(5);

  // Découpage de la liste des séries à afficher
  const displayedSeries = series.slice(
    currentIndex,
    currentIndex + imagesPerPage
  );

  //faire défiler  les images avec le doigt
  const handleScrollRight = () => {
    // Vérifiez si on peut encore avancer à droite
    if (currentIndex + imagesPerPage < series.length) {
      setCurrentIndex((prevIndex) => prevIndex + imagesPerPage);
    }
  };

  const handleScrollLeft = () => {
    // Vérifiez si on peut encore revenir à gauche
    if (currentIndex - imagesPerPage >= 0) {
      setCurrentIndex((prevIndex) => prevIndex - imagesPerPage);
    } else {
      setCurrentIndex(0); // Si l'index devient négatif, réinitialisez-le à 0
    }
  };

  // const handleSwipeLeft = () => {
  //   console.log("Swiped Left!");
  //   handleScrollRight();
  // };

  // const handleSwipeRight = () => {
  //   console.log("Swiped Right!");
  //   handleScrollLeft();
  // };

  const handlePrev = () => {
    setCurrentIndex((oldIndex) => Math.max(oldIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((oldIndex) =>
      Math.min(oldIndex + 1, series.length - imagesPerPage)
    );
  };

  return (
    <>
      <SeriesTitle>Tendances de la semaine</SeriesTitle>
      <TrendingContainer>
        {showModal && (
          <ModalVideo
            videoId={currentVideo}
            overview={currentOverview}
            onClose={handleCloseModal}
          />
        )}
        <ArrowContainer>
          <TrendingWrapper
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            <ScrollingArrows
              series={series}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              onShowArrows={true}
              showArrows={showArrows}
              onImagesPerPageChange={(value) => setImagesPerPage(value)} // Ajout de la prop callback
            />

            <SwipeableContainer
              // onSwipeLeft={handleSwipeLeft}
              // onSwipeRight={handleSwipeRight}
              onSwipeLeft={handleNext}
              onSwipeRight={handlePrev}
            >
              <ScrollContainer>
                <TrendingList>
                  {displayedSeries.map((serie) => (
                    <TrendingItem
                      key={serie.id}
                      onClick={() =>
                        handleOpenModal(serie.video, serie.overview)
                      }
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
                              onMouseEnter={() => dispatch(showInfosTooltip())}
                              onMouseLeave={() => dispatch(hideInfosTooltip())}
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
  );
}

export default TrendingSeries;
