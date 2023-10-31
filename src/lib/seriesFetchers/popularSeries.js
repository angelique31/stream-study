import { API_BASE_URL, API_KEY } from "../config";

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

async function fetchVideoForPopularSeries(seriesId) {
  // console.log("Appel de fetchPopularSeries");
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
    // console.log("Vidéos pour séries populaires :", data.results);
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchPopularSeriesWithVideos() {
  try {
    const series = await fetchPopularSeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForPopularSeries(serie.id);
        return { ...serie, video: videoKey || null };
      })
    );

    // console.log("Séries populaires avec vidéos :", seriesWithVideos);
    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
