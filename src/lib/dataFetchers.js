import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";

export async function loadHomePageData() {
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
