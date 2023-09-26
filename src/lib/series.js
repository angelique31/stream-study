import { API_BASE_URL, API_KEY } from "./config";

export async function fetchPopularSeries() {
  // console.log("Appel de fetchPopularSeries");
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/popular?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch popular series. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("Séries populaires reçues :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
