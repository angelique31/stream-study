import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import {
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
} from "../PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries.styled";
import ImageLoader from "../PagesDashboard/ComponentsDashboard/ImageLoader/ImageLoader";
import IconPlus from "../../assets/icons/plus.svg";
import ArrowIcon from "../../assets/icons/arrowIcon/arrowIcon.svg";
import CheckIcon from "../../assets/icons/checkIcon/checkIcon.svg";

import {
  showTooltip,
  hideTooltip,
  showInfosTooltip,
  hideInfosTooltip,
  addToList as addToListAction,
  removeFromList as removeFromListAction,
} from "../../store/actions/tooltipActions";
import defautImage from "../../assets/pictures/boxshot.png";

const SerieCard = ({ serie, onOpenModal, isInMyListPage, onRemoveSerie }) => {
  const dispatch = useDispatch();

  // Récupération de l'état des tooltips depuis le store Redux
  const { tooltipVisible, infosTooltipVisible, myList } = useSelector(
    (state) => state.tooltip
  );

  const isInList = serie && myList.some((s) => s.id === serie.id);

  const addToList = () => {
    dispatch(addToListAction(serie));
  };

  const removeFromList = () => {
    dispatch(removeFromListAction(serie));
    // Appeler le callback fourni depuis le composant parent.
    if (onRemoveSerie) {
      onRemoveSerie(serie);
    }
  };

  let tooltipText = tooltipVisible ? "Ajouter à ma liste" : null;
  if (isInMyListPage && tooltipVisible) {
    tooltipText = "Retirer de ma liste";
  }

  return (
    <TrendingItem key={serie.id}>
      {/* <ImageWrapper> */}
      <ImageWrapper
        onClick={() =>
          onOpenModal(serie.video, serie.overview, serie.poster_path)
        }
      >
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

        <TitleOverlay>{serie.name || serie.original_title}</TitleOverlay>
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
              {isInList ? (
                <Image
                  src={CheckIcon}
                  alt="Icon Check"
                  width={20}
                  height={20}
                  onClick={() => removeFromList()}
                  onMouseEnter={() => {
                    dispatch(showTooltip());
                  }}
                  onMouseLeave={() => {
                    dispatch(hideTooltip());
                  }}
                />
              ) : (
                <Image
                  src={IconPlus}
                  alt="Icon Plus"
                  width={20}
                  height={20}
                  onClick={addToList}
                  onMouseEnter={() => {
                    dispatch(showTooltip());
                  }}
                  onMouseLeave={() => {
                    dispatch(hideTooltip());
                  }}
                />
              )}

              {tooltipVisible && <Tooltip>Ajouter à ma liste</Tooltip>}
              {tooltipText && <Tooltip>{tooltipText}</Tooltip>}
            </TooltipWrapper>
          </IconContainer>

          <IconContainer>
            <Image
              className="arrow-down-icon"
              src={ArrowIcon}
              alt="Arrow Icon"
              width={25}
              height={15}
              onClick={() =>
                onOpenModal(serie.video, serie.overview, serie.poster_path)
              }
              onMouseEnter={() => dispatch(showInfosTooltip())}
              onMouseLeave={() => dispatch(hideInfosTooltip())}
            />
            {infosTooltipVisible && <Tooltip>{`Plus d'infos`}</Tooltip>}
          </IconContainer>
        </ActionButtons>
      </OverviewWrapper>
    </TrendingItem>
  );
};

export default SerieCard;
