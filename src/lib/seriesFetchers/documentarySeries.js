import { API_BASE_URL, API_KEY } from "../config";

export async function fetchDocumentarySeries() {
  // console.log("Appel de fetchDocumentarySeries");
  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=18`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch documentary series. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("Séries documentaires récupérées :", data.results);
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function fetchVideoForDocumentarySeries(seriesId) {
  // console.log("Appel de fetchVideoForDocumentarySeries");
  try {
    const response = await fetch(
      `${API_BASE_URL}/tv/${seriesId}/videos?api_key=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch video for documentary series with ID ${seriesId}. Status: ${response.status}`
      );
    }

    const data = await response.json();
    // console.log("Vidéos de séries documentaires récupérées :", data.results);
    return data.results[0]?.key; // Prend la première vidéo.
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchDocumentarySeriesWithVideos() {
  try {
    const series = await fetchDocumentarySeries();

    const seriesWithVideos = await Promise.all(
      series.map(async (serie) => {
        const videoKey = await fetchVideoForDocumentarySeries(serie.id);

        return { ...serie, video: videoKey || null };
      })
    );

    // console.log("Séries documentaires avec vidéos récupérées :", seriesWithVideos);
    return seriesWithVideos;
  } catch (error) {
    console.error(error);
    return [];
  }
}
