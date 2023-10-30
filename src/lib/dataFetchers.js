import { fetchPopularMovies } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";
import {
  fetchFrenchDramas,
  fetchTrendingMoviesWithVideos,
} from "./frenchDramas";
import { fetchComedySeriesWithVideos } from "./comedySeries";
import { fetchMostSearchedSeriesWithVideos } from "./mostSearchedSeries";

export async function loadHomePageData() {
  const [
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
    mostSearchedSeries,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
    fetchPopularMovies(),
    fetchFrenchDramas(),
    fetchTrendingMoviesWithVideos(),
    fetchComedySeriesWithVideos(),
    fetchMostSearchedSeriesWithVideos(),
  ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
    mostSearchedSeries,
  };
}
