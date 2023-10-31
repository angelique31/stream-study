import { fetchPopularMoviesWithVideos } from "./moviesFetchers/movies";
import { fetchPopularSeries } from "./series";
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
    popularMoviesInFrench,
    romanticMoviesWithVideos,
    actionMoviesWithVideos,
    suspenseMoviesWithVideos,
  ] = await Promise.all([
    fetchTrendingSeriesWithVideos(),
    fetchPopularSeries(),
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
    popularMoviesInFrench,
    romanticMoviesWithVideos,
    actionMoviesWithVideos,
    suspenseMoviesWithVideos,
  };
}
