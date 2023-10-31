import { API_BASE_URL, API_KEY } from "../config";

export async function fetchTrendingSeries() {
  // console.log("Appel de fetchTrendingSeries");
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
    // console.log("Tendances de la semaine :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForSeries(seriesId) {
  // console.log("Appel de fetchTrendingSeries");
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
    // console.log("Tendances de la semaine :", data.results);
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchTrendingSeriesWithVideos() {
  try {
    const series = await fetchTrendingSeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForSeries(serie.id);

        return { ...serie, video: videoKey || null };
      })
    );

    // console.log("Tendances de la semaine avec vidéos :", seriesWithVideos);
    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
