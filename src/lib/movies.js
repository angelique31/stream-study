import { API_BASE_URL, API_KEY } from "./config";

export async function fetchPopularMovies() {
  // console.log("Appel de fetchPopularMovies");
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    // Vérification de la réponse
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
    // Tu peux décider de renvoyer une liste vide ou de propager l'erreur
    return [];
  }
}
