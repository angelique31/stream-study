// const API_BASE_URL = "https://api.themoviedb.org/3";

// const API_KEY = process.env.TMDB_API_KEY;

// export async function fetchPopularMovies() {
//   console.log("Appel de fetchPopularMovies");
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

// export async function fetchMovieDetails(id) {
//   try {
//     const response = await fetch(
//       `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=videos,images`
//     );

//     // Vérification de la réponse
//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch movie details for ID ${id}. Status: ${response.status}`
//       );
//     }

//     const data = await response.json();
//     // console.log(`Détails du film ID ${id}:`, data);
//     return data;
//   } catch (error) {
//     console.error(error);
//     // Ici aussi, tu peux choisir de renvoyer un objet vide ou de propager l'erreur
//     return {};
//   }
// }
