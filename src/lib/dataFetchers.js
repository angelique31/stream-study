import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";
import {
  fetchFrenchDramas,
  fetchTrendingMoviesWithVideos,
} from "./frenchDramas";

export async function loadHomePageData() {
  const [
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
    fetchPopularMovies(),
    fetchFrenchDramas(),
    fetchTrendingMoviesWithVideos(),
  ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,

    // ... d'autres données
  };
}
