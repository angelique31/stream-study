import { API_BASE_URL, API_KEY } from "./config";

export async function fetchFrenchDramas() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&language=fr-FR&region=FR&sort_by=vote_average.desc&with_original_language=fr&with_video=true`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch French dramas. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("drames francais :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForMovie(movieId) {
  console.log("Appel de fetchVideoForMovie");
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch video for movie with ID ${movieId}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("videos drames francais :", data.results);
    return data.results[0]?.key;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchTrendingMoviesWithVideos() {
  try {
    const movies = await fetchFrenchDramas();
    // console.log("films avec video", movies);

    const moviesWithVideos = await Promise.all(
      movies.map(async (movie) => {
        const videoKey = await fetchVideoForMovie(movie.id);
        // console.log(`Clé vidéo pour le film ${movie.id}:`, videoKey);
        // return { ...movie, video: videoKey || null };
        return {
          ...movie,
          video: videoKey || null,
          noVideo: videoKey ? false : true,
        };
      })
    );

    console.log("drames avec vidéos :", moviesWithVideos);

    return moviesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
