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
import { fetchAnimatedMoviesWithVideos } from "./moviesFetchers/animatedMovies";
import { fetchAnimatedSeriesWithVideos } from "./seriesFetchers/animatedSeries";
import { fetchDocumentarySeriesWithVideos } from "./seriesFetchers/documentarySeries";

import { fetchOnTheAirSeriesWithVideos } from "./latestFetchers/onTheAirSeries";

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
    animatedMovies,
    realBasedSeriesWithVideos,
    popularSeries,
    animatedSeries,
    documentarySeries,

    onTheAirSeries,
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
    fetchAnimatedMoviesWithVideos(),
    fetchRealBasedSeriesWithVideos(),
    fetchPopularSeriesWithVideos(),
    fetchAnimatedSeriesWithVideos(),
    fetchDocumentarySeriesWithVideos(),

    fetchOnTheAirSeriesWithVideos(),
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
    animatedMovies,
    realBasedSeriesWithVideos,
    popularSeries,
    animatedSeries,
    documentarySeries,

    onTheAirSeries,
  };
}

// import { fetchPopularMoviesWithVideos } from "./moviesFetchers/movies";
// import { fetchTrendingSeriesWithVideos } from "./homePageFetchers/trends";
// import {
//   fetchFrenchDramas,
//   fetchTrendingMoviesWithVideos,
// } from "./homePageFetchers/frenchDramas";
// import { fetchComedySeriesWithVideos } from "./homePageFetchers/comedySeries";
// import { fetchMostSearchedSeriesWithVideos } from "./homePageFetchers/mostSearchedSeries";
// import { fetchSeriesAddedLast12MonthsWithVideos } from "./homePageFetchers/seriesAddedLast12Months";
// export async function loadHomePageData() {
//   const [
//     trendingSeries,
//     popularMovies,
//     frenchDramas,
//     trendingMoviesWithVideos,
//     comedySeries,
//     mostSearchedSeries,
//     seriesAddedLast12Months,
//   ] = await Promise.all([
//     fetchTrendingSeriesWithVideos(),
//     fetchPopularMoviesWithVideos(),
//     fetchFrenchDramas(),
//     fetchTrendingMoviesWithVideos(),
//     fetchComedySeriesWithVideos(),
//     fetchMostSearchedSeriesWithVideos(),
//     fetchSeriesAddedLast12MonthsWithVideos(),
//   ]);

//   return {
//     trendingSeries,
//     popularMovies,
//     frenchDramas,
//     trendingMoviesWithVideos,
//     comedySeries,
//     mostSearchedSeries,
//     seriesAddedLast12Months,
//   };
// }
