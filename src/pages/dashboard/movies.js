import { loadHomePageData } from "@/lib/dataFetchers";
import Movies from "@/components/PagesDashboard/Movies/Movies";

import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";

function movies({ popularMovies }) {
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/moviesVideo.mp4"
        title="Épopée Dragonienne, un voyage fantastique"
      />
      {/* <Movies movies={popularMovies} /> */}
      <CategorySeries title="Tendances de la semaine" data={popularMovies} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularMovies: data.popularMovies,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default movies;
