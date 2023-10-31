import { fetchPopularMoviesWithVideos } from "./movies";
import { fetchPopularSeries } from "./series";
import { fetchTrendingSeriesWithVideos } from "./trends";
import {
  fetchFrenchDramas,
  fetchTrendingMoviesWithVideos,
} from "./frenchDramas";
import { fetchComedySeriesWithVideos } from "./comedySeries";
import { fetchMostSearchedSeriesWithVideos } from "./mostSearchedSeries";
import { fetchSeriesAddedLast12MonthsWithVideos } from "./seriesAddedLast12Months";

export async function loadHomePageData() {
  const [
    trendingSeries,
    popularSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
    mostSearchedSeries,
    seriesAddedLast12Months,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
    fetchPopularMoviesWithVideos(),
    fetchFrenchDramas(),
    fetchTrendingMoviesWithVideos(),
    fetchComedySeriesWithVideos(),
    fetchMostSearchedSeriesWithVideos(),
    fetchSeriesAddedLast12MonthsWithVideos(),
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
    seriesAddedLast12Months,
  };
}
