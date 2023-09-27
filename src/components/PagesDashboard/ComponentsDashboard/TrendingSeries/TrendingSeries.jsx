import React from "react";
import Image from "next/image";
import {
  TrendingContainer,
  TrendingList,
  TrendingItem,
  TrendingTitle,
  ActionButtons,
  VideoWrapper,
  ImageWrapper,
  OverviewWrapper,
} from "./TrendingSeries.styled";

function TrendingSeries({ series }) {
  return (
    <TrendingContainer>
      <h2>Tendances de la semaine (Séries)</h2>
      <TrendingList>
        {series.map((serie) => (
          <TrendingItem key={serie.id}>
            {/* <TrendingTitle>{serie.name}</TrendingTitle> */}
            <ImageWrapper>
              {serie.poster_path && (
                <Image
                  src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                  alt={serie.name}
                  width={450}
                  height={350}
                  objectFit="cover"
                />
              )}
            </ImageWrapper>
            <ActionButtons className="action-buttons">
              {/* Vos boutons Play, + et flèche ici */}
            </ActionButtons>

            <VideoWrapper>
              {serie.video && (
                <iframe
                  src={`https://www.youtube.com/embed/${serie.video}`}
                  title={`Vidéo de ${serie.name}`}
                  width="450"
                  height="350"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </VideoWrapper>

            {/* <p>Popularité : {serie.popularity}</p> */}

            {/* {serie.overview && <p>{serie.overview}</p>} */}
            <OverviewWrapper>
              {serie.overview && <p>{serie.overview}</p>}
            </OverviewWrapper>
          </TrendingItem>
        ))}
      </TrendingList>
    </TrendingContainer>
  );
}

export default TrendingSeries;
