// import { fetchPopularSeries } from "@/lib/series";

import { loadHomePageData } from "@/lib/dataFetchers";
import Series from "@/components/PagesDashboard/Series/Series";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";

function series({ popularSeries }) {
  return (
    <>
      <NavWithScroll />

      <Series series={popularSeries} />
      {/* <BackgroundVideo
        videoPath="/assets/videos/seriesVideo.mp4"
        title="Séries"
      /> */}
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularSeries: data.popularSeries,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default series;
