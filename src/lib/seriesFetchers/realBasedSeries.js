import { API_BASE_URL, API_KEY } from "../config";

export async function fetchRealBasedSeries() {
  // console.log("Appel de fetchRealBasedSeries");
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?with_genres=99&api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch series based on real events. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("Séries basées sur des faits réels :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForRealBasedSeries(seriesId) {
  // console.log("Appel de fetchVideoForRealBasedSeries");
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
    // console.log("Vidéos des séries basées sur des faits réels :", data.results);
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchRealBasedSeriesWithVideos() {
  try {
    const series = await fetchRealBasedSeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForRealBasedSeries(serie.id);

        return { ...serie, video: videoKey || null };
      })
    );

    // console.log("Séries basées sur des faits réels avec vidéos :", seriesWithVideos);
    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
