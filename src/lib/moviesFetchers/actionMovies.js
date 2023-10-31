import { API_BASE_URL, API_KEY } from "../config";

export async function fetchActionMovies() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch action movies. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForActionMovies(movieId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch video for action movie with ID ${movieId}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchActionMoviesWithVideos() {
  try {
    const movies = await fetchActionMovies();

    const moviesWithVideos = await Promise.all(
      movies.map(async (movie) => {
        const videoKey = await fetchVideoForActionMovies(movie.id);

        return { ...movie, video: videoKey || null };
      })
    );

    return moviesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
