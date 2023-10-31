import { loadHomePageData } from "@/lib/dataFetchers";

import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";

function series({ popularSeries, realBasedSeriesWithVideos }) {
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/seriesVideo.mp4"
        title="Horizon Méditerranéen : Entre Nature et Urbanité"
      />

      <CategorySeries title="Séries populaires" data={popularSeries} />
      <CategorySeries
        title="Séries basées sur des faits réels"
        data={realBasedSeriesWithVideos}
      />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularSeries: data.popularSeries,
      realBasedSeriesWithVideos: data.realBasedSeriesWithVideos,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default series;
