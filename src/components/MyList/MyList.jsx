import React from "react";
import { useSelector } from "react-redux";
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

const MyListPage = () => {
  const myList = useSelector((state) => state.list.myList);

  // Récupération de l'état des tooltips depuis le store Redux
  const { tooltipVisible, infosTooltipVisible } = useSelector(
    (state) => state.tooltip
  );
  return (
    <div>
      <h1>Ma Liste</h1>
      <ul>
        {myList.map((serie, index) => (
          <li key={index}>
            <TrendingItem
              key={serie.id}
              onClick={() =>
                handleOpenModal(serie.video, serie.overview, serie.poster_path)
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
                        onClick={() => addMyList(serie)}
                        onMouseEnter={() => {
                          dispatch(showTooltip());
                        }}
                        onMouseLeave={() => {
                          dispatch(hideTooltip());
                        }}
                      />

                      {tooltipVisible && <Tooltip>Ajouter à ma liste</Tooltip>}
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
                    {infosTooltipVisible && <Tooltip>{`Plus d'infos`}</Tooltip>}
                  </IconContainer>
                </ActionButtons>
              </OverviewWrapper>
            </TrendingItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyListPage;
