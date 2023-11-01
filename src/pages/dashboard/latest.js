import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import { loadHomePageData } from "@/lib/dataFetchers";

function latest({ onTheAirSeries }) {
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/newVideo.mp4"
        title="Au Cœur de la Forêt Enchantée"
      />

      <CategorySeries
        title="Séries actuellement diffusées"
        data={onTheAirSeries}
      />
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
export default latest;
