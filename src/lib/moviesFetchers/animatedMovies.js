import { API_BASE_URL, API_KEY } from "../config";

export async function fetchAnimatedMovies() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch animated movies. Status: ${response.status}`
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

export async function fetchAnimatedMoviesWithVideos() {
  try {
    const movies = await fetchAnimatedMovies();

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
