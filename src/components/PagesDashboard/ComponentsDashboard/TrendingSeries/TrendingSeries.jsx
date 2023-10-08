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
import {
  setScrollPosition,
  toggleLeftArrow,
  toggleRightArrow,
} from "../../../../store/actions/carousselActions";

import SwipeableContainer from "../../../SwipeableContainer/SwipeableContainer";

import {
  TrendingContainer,
  ArrowContainer,
  TrendingWrapper,
  Arrow,
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
  const dispatch = useDispatch();

  //tooltip
  const { tooltipVisible, infosTooltipVisible } = useSelector(
    (state) => state.tooltip
  );
  // const [infosTooltipVisible, setInfosTooltipVisible] = useState(false);

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

  // Caroussel pour le défilement des images horizontalement
  const { scrollPosition, showLeftArrow, showRightArrow } = useSelector(
    (state) => state.caroussel
  );

  const handleScrollRight = () => {
    const widthToScroll = 266;
    const totalWidth = series.length * widthToScroll;

    if (scrollPosition + 2 * widthToScroll >= totalWidth - widthToScroll * 3) {
      const newPosition = totalWidth - widthToScroll * 4;
      dispatch(setScrollPosition(newPosition));
      dispatch(toggleRightArrow(false)); // Cache la flèche de droite
    } else {
      const newPosition = scrollPosition + widthToScroll;
      dispatch(setScrollPosition(newPosition));
      dispatch(toggleLeftArrow(true)); // Montre la flèche de gauche
    }
  };

  const handleScrollLeft = () => {
    const widthToScroll = 266;

    if (scrollPosition - widthToScroll <= 0) {
      dispatch(setScrollPosition(0));
      dispatch(toggleLeftArrow(false)); // Cache la flèche de gauche
    } else {
      const newPosition = scrollPosition - widthToScroll;
      dispatch(setScrollPosition(newPosition));
      dispatch(toggleRightArrow(true)); // Montre la flèche de droite
    }
  };

  //apparition des flèches au survol sur l'image
  const [showArrows, setShowArrows] = useState(false);

  const handleMouseEnter = () => {
    setShowArrows(true);
  };

  const handleMouseLeave = () => {
    setShowArrows(false);
  };
  //déplacer les images avec le doigt
  const handleSwipeLeft = () => {
    handleScrollRight();
  };

  const handleSwipeRight = () => {
    handleScrollLeft();
  };
  return (
    <TrendingContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>Tendances de la semaine (Séries)</h2>
      {showModal && (
        <ModalVideo
          videoId={currentVideo}
          overview={currentOverview}
          onClose={handleCloseModal}
        />
      )}
      <ArrowContainer>
        <TrendingWrapper>
          {showArrows && showLeftArrow && (
            <div onClick={handleScrollLeft}>
              <Arrow
                left
                visible={showArrows && showLeftArrow}
                onClick={handleScrollLeft}
              >
                <ArrowLeftIcon color="red" size="40" />
              </Arrow>
            </div>
          )}
          <SwipeableContainer
            onSwipeLeft={handleSwipeLeft}
            onSwipeRight={handleSwipeRight}
          >
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
          {showArrows && showRightArrow && (
            <div onClick={handleScrollRight}>
              <Arrow
                right
                visible={showArrows && showRightArrow}
                onClick={handleScrollRight}
              >
                <ArrowRightIcon color="red" size="40" />
              </Arrow>
            </div>
          )}
        </TrendingWrapper>
      </ArrowContainer>
    </TrendingContainer>
  );
}

export default TrendingSeries;
