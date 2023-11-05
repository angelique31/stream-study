import { API_BASE_URL, API_KEY } from "./config";

// Cette fonction récupère les vidéos d'un film spécifique.
async function fetchVideosForMovie(movieId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch videos for movie with ID ${movieId}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return null; // Ou gérer l'erreur comme vous le souhaitez.
  }
}

export async function searchMovies(query) {
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedQuery}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await response.json();
  const movies = data.results;

  // Ajouter les clés vidéo à chaque film.
  const moviesWithVideos = await Promise.all(
    movies.map(async (movie) => {
      const videos = await fetchVideosForMovie(movie.id);
      return { ...movie, videos: videos || null };
    })
  );

  return moviesWithVideos;
}
