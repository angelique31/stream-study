import { API_BASE_URL, API_KEY } from "./config";

export async function fetchComedySeries() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch comedy series. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForComedySeries(seriesId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch video for comedy series with ID ${seriesId}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results[0]?.key;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchComedySeriesWithVideos() {
  try {
    const series = await fetchComedySeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForComedySeries(serie.id);
        return { ...serie, video: videoKey || null };
      })
    );

    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
