import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";
import {
  fetchFrenchDramas,
  fetchTrendingMoviesWithVideos,
} from "./frenchDramas";
import { fetchComedySeriesWithVideos } from "./comedySeries";

export async function loadHomePageData() {
  const [
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
    fetchPopularMovies(),
    fetchFrenchDramas(),
    fetchTrendingMoviesWithVideos(),
    fetchComedySeriesWithVideos(),
  ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,

    // ... d'autres données
  };
}
