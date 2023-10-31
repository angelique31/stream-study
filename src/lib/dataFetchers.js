import { fetchPopularMoviesWithVideos } from "./moviesFetchers/movies";
import { fetchPopularSeriesWithVideos } from "./seriesFetchers/popularSeries";
import { fetchTrendingSeriesWithVideos } from "./homePageFetchers/trends";
import {
  fetchFrenchDramas,
  fetchTrendingMoviesWithVideos,
} from "./homePageFetchers/frenchDramas";
import { fetchComedySeriesWithVideos } from "./homePageFetchers/comedySeries";
import { fetchMostSearchedSeriesWithVideos } from "./homePageFetchers/mostSearchedSeries";
import { fetchSeriesAddedLast12MonthsWithVideos } from "./homePageFetchers/seriesAddedLast12Months";
import { fetchPopularMoviesInFrenchWithVideos } from "./moviesFetchers/popularMoviesInFrench";
import { fetchRomanticMoviesWithVideos } from "./moviesFetchers/romanticMovies";
import { fetchActionMoviesWithVideos } from "./moviesFetchers/actionMovies";
import { fetchSuspenseMoviesWithVideos } from "./moviesFetchers/suspensMovies";
import { fetchRealBasedSeriesWithVideos } from "./seriesFetchers/realBasedSeries";

export async function loadHomePageData() {
  const [
    trendingSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
    mostSearchedSeries,
    seriesAddedLast12Months,
    popularMoviesInFrench,
    romanticMoviesWithVideos,
    actionMoviesWithVideos,
    suspenseMoviesWithVideos,
    realBasedSeriesWithVideos,
    popularSeries,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularMoviesWithVideos(),
    fetchFrenchDramas(),
    fetchTrendingMoviesWithVideos(),
    fetchComedySeriesWithVideos(),
    fetchMostSearchedSeriesWithVideos(),
    fetchSeriesAddedLast12MonthsWithVideos(),
    fetchPopularMoviesInFrenchWithVideos(),
    fetchRomanticMoviesWithVideos(),
    fetchActionMoviesWithVideos(),
    fetchSuspenseMoviesWithVideos(),
    fetchRealBasedSeriesWithVideos(),
    fetchPopularSeriesWithVideos(),
  ]);

  // ... d'autres appels à l'API si nécessaire

  return {
    trendingSeries,
    popularMovies,
    frenchDramas,
    trendingMoviesWithVideos,
    comedySeries,
    mostSearchedSeries,
    seriesAddedLast12Months,
    popularMoviesInFrench,
    romanticMoviesWithVideos,
    actionMoviesWithVideos,
    suspenseMoviesWithVideos,
    realBasedSeriesWithVideos,
    popularSeries,
  };
}
