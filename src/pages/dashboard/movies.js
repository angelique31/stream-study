import { loadHomePageData } from "@/lib/dataFetchers";

import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import CategorySeries from "@/components/PagesDashboard/ComponentsDashboard/CategorySeries/CategorySeries";

function movies({
  popularMovies,
  romanticMoviesWithVideos,
  actionMoviesWithVideos,
  popularMoviesInFrench,
  suspenseMoviesWithVideos,
  animatedMovies,
}) {
  return (
    <>
      <NavWithScroll />

      <BackgroundVideo
        videoPath="/assets/videos/moviesVideo.mp4"
        title="Épopée Dragonienne, un voyage fantastique"
      />

      <CategorySeries title="Tendances de la semaine" data={popularMovies} />
      <CategorySeries
        title="Les films romantiques"
        data={romanticMoviesWithVideos}
      />
      <CategorySeries
        title="Les films d'action"
        data={actionMoviesWithVideos}
      />
      <CategorySeries
        title="Les films populaires en français"
        data={popularMoviesInFrench}
      />

      <CategorySeries
        title="Les films à suspense"
        data={suspenseMoviesWithVideos}
      />

      <CategorySeries title="Les films animés" data={animatedMovies} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularMovies: data.popularMovies,
      romanticMoviesWithVideos: data.romanticMoviesWithVideos,
      actionMoviesWithVideos: data.actionMoviesWithVideos,
      popularMoviesInFrench: data.popularMoviesInFrench,
      suspenseMoviesWithVideos: data.suspenseMoviesWithVideos,
      animatedMovies: data.animatedMovies,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default movies;
