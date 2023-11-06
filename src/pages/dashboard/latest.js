import React from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import { loadHomePageData } from "@/lib/dataFetchers";
import SearchResultsComponent from "@/components/PagesDashboard/SearchResultsComponent/SearchResultsComponent";

function Latest({ onTheAirSeries }) {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isSearchActive = searchResults && searchResults.length > 0;
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/newVideo.mp4"
        title="Au Cœur de la Forêt Enchantée"
      />
      {isSearchActive ? (
        <SearchResultsComponent results={searchResults} />
      ) : (
        <>
          <CategorySeries
            title="Séries actuellement diffusées"
            data={onTheAirSeries}
          />
        </>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      onTheAirSeries: data.onTheAirSeries,

      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}
export default Latest;
