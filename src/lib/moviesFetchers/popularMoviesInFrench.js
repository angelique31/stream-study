import { API_BASE_URL, API_KEY } from "../config";

export async function fetchPopularMoviesInFrench() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch popular movies in French. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForMovie(movieId) {
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
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchPopularMoviesInFrenchWithVideos() {
  try {
    const movies = await fetchPopularMoviesInFrench();

    const moviesWithVideos = await Promise.all(
      movies.map(async (movie) => {
        const videoKey = await fetchVideoForMovie(movie.id);

        return { ...movie, video: videoKey || null };
      })
    );

    return moviesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
