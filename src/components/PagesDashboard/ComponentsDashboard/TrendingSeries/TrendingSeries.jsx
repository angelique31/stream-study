import React from "react";
import Image from "next/image";
import {
  TrendingContainer,
  TrendingWrapper,
  TrendingList,
  TrendingItem,
  ActionButtons,
  VideoWrapper,
  ImageWrapper,
  OverviewWrapper,
} from "./TrendingSeries.styled";

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
                    src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                    alt={serie.name}
                    width={250}
                    height={150}

                    // layout="responsive"
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
                    // width="500"
                    // height="300"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </VideoWrapper>

              {/* {serie.overview && <p>{serie.overview}</p>} */}
              <OverviewWrapper>
                {serie.overview && <p>{serie.overview}</p>}
              </OverviewWrapper>
            </TrendingItem>
          ))}
        </TrendingList>
      </TrendingWrapper>
    </TrendingContainer>
  );
}

export default TrendingSeries;
