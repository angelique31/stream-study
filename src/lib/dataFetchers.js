import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeries, fetchTrendingSeriesWithVideos } from "./trends";

// export async function loadHomePageData() {
//   const [trendingSeries] = await Promise.all([
//     fetchTrendingSeries(),

//     // ... d'autres appels à l'API
//   ]);

//   return {
//     trendingSeries,

//     // ... d'autres données
//   };
// }

export async function loadHomePageData() {
  // const trendingSeries = await fetchTrendingSeriesWithVideos();
  const [trendingSeries, popularSeries, popularMovies] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
    fetchPopularMovies(),
    
  ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularSeries,
    popularMovies,
    // ... d'autres données
  };
}
