import React from "react";
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
} from "./TrendingSeries.styled";

import IconPlus from "../../../../assets/icons/plus.svg";
import ArrowIcon from "../../../../assets/icons/arrowIcon.svg";

function TrendingSeries({ series }) {
  return (
    <TrendingContainer>
      <h2>Tendances de la semaine (Séries)</h2>
      <TrendingWrapper>
        <TrendingList>
          {series.map((serie) => (
            <TrendingItem key={serie.id}>
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
                    // width="500"
                    // height="300"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </VideoWrapper>

              <OverviewWrapper>
                {/* {serie.overview && <p>{serie.overview}</p>} */}
                <ActionButtons className="action-buttons">
                  <IconContainer>
                    <Image
                      src={IconPlus}
                      alt="Icon Plus"
                      width={25}
                      height={15}
                    />
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
      </TrendingWrapper>
    </TrendingContainer>
  );
}

export default TrendingSeries;
