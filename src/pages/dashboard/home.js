import React, { useState, useEffect } from "react";
import { loadHomePageData } from "@/lib/dataFetchers";

import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/TrendingSeries/CategorySeries";
import filterFrenchDramas from "@/components/PagesDashboard/ComponentsDashboard/FilterFrenchDramas/FilterFrenchDramas";

function HomePage({ trendingSeries, frenchDramas }) {
  const [trendingData, setTrendingData] = useState(trendingSeries);
  const [dramaData, setDramaData] = useState(frenchDramas || []);

  return (
    <>
      <NavWithScroll />
      <BackgroundVideo />

      <CategorySeries title="Tendances de la semaine" data={trendingData} />
      <CategorySeries title="Drames en français" data={dramaData} />
    </>
  );
}
// export async function getServerSideProps() {
//   const data = await loadHomePageData();

//   return {
//     props: data,
//   };
// }

// export async function getServerSideProps() {
//   const data = await loadHomePageData();

//   const frenchDramasFiltered = filterFrenchDramas(data.trendingSeries || []);

//   return {
//     props: {
//       ...data,
//       frenchDramas: frenchDramasFiltered,
//     },
//   };
// }

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
