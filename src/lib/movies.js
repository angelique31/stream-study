// import { API_BASE_URL, API_KEY } from "./config";

// export async function fetchPopularMovies() {
//   // console.log("Appel de fetchPopularMovies");
//   try {
//     const response = await fetch(
//       `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
//     );

//     // Vérification de la réponse
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch popular movies. Status: ${response.status}`
//       );
//     }

//     const data = await response.json();
//     // console.log("Films populaires:", data.results);
//     return data.results;
//   } catch (error) {
//     console.error(error);
//     // Tu peux décider de renvoyer une liste vide ou de propager l'erreur
//     return [];
//   }
// }

import { API_BASE_URL, API_KEY } from "./config";

export async function fetchPopularMovies() {
  // console.log("Appel de fetchPopularMovies");
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch popular movies. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("Films populaires:", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForMovie(movieId) {
  // console.log("Appel de fetchVideoForMovie");
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
    // console.log("Vidéo pour le film:", data.results);
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchPopularMoviesWithVideos() {
  try {
    const movies = await fetchPopularMovies();

    const moviesWithVideos = await Promise.all(
      movies.map(async (movie) => {
        const videoKey = await fetchVideoForMovie(movie.id);

        return { ...movie, video: videoKey || null };
      })
    );

    // console.log("Films populaires avec vidéos:", moviesWithVideos);
    return moviesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
