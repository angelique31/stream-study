import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";
import { fetchFrenchDramas } from "./frenchDramas";

export async function loadHomePageData() {
  const [trendingSeries, popularSeries, popularMovies, frenchDramas] =
    await Promise.all([
      fetchTrendingSeriesWithVideos(),
      fetchPopularSeries(),
      fetchPopularMovies(),
      fetchFrenchDramas(),
    ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    // ... d'autres données
  };
}
