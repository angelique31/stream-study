import React from "react";
import { loadHomePageData } from "@/lib/dataFetchers";
import { useSelector } from "react-redux";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";
import SearchResultsComponent from "@/components/PagesDashboard/SearchResultsComponent/SearchResultsComponent";

function HomePage({
  trendingSeries,
  frenchDramas,
  comedySeries,
  mostSearchedSeries,
  seriesAddedLast12Months,
}) {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isSearchActive = searchResults && searchResults.length > 0;

  return (
    <>
      <NavWithScroll />
      <BackgroundVideo
        videoPath="/assets/videos/backgroundVideo.mp4"
        title="Plongée dans les profondeurs de l'océan"
      />
      {isSearchActive ? (
        <SearchResultsComponent results={searchResults} />
      ) : (
        <>
          <CategorySeries
            title="Tendances de la semaine"
            data={trendingSeries}
          />
        </>
      )}
      <CategorySeries title="Drames en français" data={frenchDramas} />
      <CategorySeries title="Séries comiques" data={comedySeries} />
      <CategorySeries title="Les plus recherchés" data={mostSearchedSeries} />
      <CategorySeries
        title="Ajouté ces 12 derniers mois"
        data={seriesAddedLast12Months}
      />
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
