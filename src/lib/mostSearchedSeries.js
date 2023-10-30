import { API_BASE_URL, API_KEY } from "./config";

export async function fetchMostSearchedSeries() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&sort_by=popularity.desc`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch most searched series. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForSeries(seriesId) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch video for series with ID ${seriesId}. Status: ${response.status}`
      );
    }
    const data = await response.json();

    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchMostSearchedSeriesWithVideos() {
  try {
    const series = await fetchMostSearchedSeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForSeries(serie.id);
        return { ...serie, video: videoKey || null };
      })
    );

    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
