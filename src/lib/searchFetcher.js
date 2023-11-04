import { API_BASE_URL, API_KEY } from "./config";

export async function searchMovies(query) {
  console.log("API Key:", API_KEY);
  const encodedQuery = encodeURIComponent(query);
  const response = await fetch(
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedQuery}`
  );

  if (!response.ok) {
    throw new Error("Network response was not ok.");
  }
  console.log(
    "Request URL:",
    `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodedQuery}`
  );
  const data = await response.json();
  return data.results;
}
