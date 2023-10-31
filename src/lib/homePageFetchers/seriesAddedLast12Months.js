import { API_BASE_URL, API_KEY } from "../config";

// Fonction pour récupérer les séries ajoutées au cours des 12 derniers mois
export async function fetchSeriesAddedLast12Months() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  const dateString = date.toISOString().split("T")[0];

  try {
    const response = await fetch(
      `${API_BASE_URL}/discover/tv?api_key=${API_KEY}&first_air_date.gte=${dateString}`
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch series added in the last 12 months. Status: ${response.status}`
      );
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Fonction pour récupérer les vidéos des séries ajoutées au cours des 12 derniers mois
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
    return data.results[0]?.key; // Prend la première vidéo
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Fonction finale pour récupérer les séries et leurs vidéos
export async function fetchSeriesAddedLast12MonthsWithVideos() {
  try {
    const series = await fetchSeriesAddedLast12Months();

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
