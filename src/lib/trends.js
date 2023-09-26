import { API_BASE_URL, API_KEY } from "./config";

export async function fetchTrendingSeries() {
  console.log("Appel de fetchTrendingSeries");
  try {
    const response = await fetch(
      `${API_BASE_URL}/trending/tv/week?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch trending series. Status: ${response.status}`
      );
    }

    const data = await response.json();
    console.log("Tendances de la semaine :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

