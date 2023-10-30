import React, { useState, useEffect } from "react";
import { loadHomePageData } from "@/lib/dataFetchers";

import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";

function HomePage({ trendingSeries, frenchDramas, comedySeries }) {
  const [trendingData, setTrendingData] = useState(trendingSeries);
  const [dramaData, setDramaData] = useState(frenchDramas || []);
  const [comedyData, setComedyData] = useState(comedySeries || []);

  return (
    <>
      <NavWithScroll />
      <BackgroundVideo />

      <CategorySeries title="Tendances de la semaine" data={trendingData} />
      <CategorySeries title="Drames en français" data={dramaData} />
      <CategorySeries title="Séries comiques" data={comedyData} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  // Filtrer tous les films français
  const allFrenchMovies = data.trendingSeries.filter(
    (movie) => movie.original_language === "fr"
  );

  // Ajouter les films français filtrés à l'objet data
  data.allFrenchMovies = allFrenchMovies;

  return {
    props: data,
  };
}

export default HomePage;
