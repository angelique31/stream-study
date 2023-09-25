import { fetchTrendingSeries } from "./trends";

export async function loadHomePageData() {
  const [trendingSeries, movies] = await Promise.all([
    fetchTrendingSeries(),

    // ... d'autres appels à l'API
  ]);

  return {
    trendingSeries,

    // ... d'autres données
  };
}
