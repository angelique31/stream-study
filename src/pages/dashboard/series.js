import React from "react";
import { useSelector } from "react-redux";
import { loadHomePageData } from "@/lib/dataFetchers";

import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";
import SearchResultsComponent from "@/components/PagesDashboard/SearchResultsComponent/SearchResultsComponent";

function Series({
  popularSeries,
  realBasedSeriesWithVideos,
  animatedSeries,
  documentarySeries,
}) {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isSearchActive = searchResults && searchResults.length > 0;
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/seriesVideo.mp4"
        title="Horizon Méditerranéen : Entre Nature et Urbanité"
      />
      {isSearchActive ? (
        <SearchResultsComponent results={searchResults} />
      ) : (
        <>
          <CategorySeries title="Séries populaires" data={popularSeries} />
        </>
      )}

      <CategorySeries
        title="Séries basées sur des faits réels"
        data={realBasedSeriesWithVideos}
      />

      <CategorySeries title="Séries animées" data={animatedSeries} />
      <CategorySeries title="Séries dramatiques" data={documentarySeries} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularSeries: data.popularSeries,
      realBasedSeriesWithVideos: data.realBasedSeriesWithVideos,
      animatedSeries: data.animatedSeries,
      documentarySeries: data.documentarySeries,
    },
  };
}

export default Series;
