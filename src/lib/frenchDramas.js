import { API_BASE_URL, API_KEY } from "./config";

export async function fetchFrenchDramas() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=18&language=fr-FR&region=FR&sort_by=vote_average.desc&with_original_language=fr`
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
