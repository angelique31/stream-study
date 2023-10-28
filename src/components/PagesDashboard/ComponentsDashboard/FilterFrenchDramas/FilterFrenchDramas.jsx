/**
 * Filtre les films pour ne sélectionner que les drames français.
 * @param {Array} movies - La liste des films à filtrer.
 * @returns {Array} - La liste filtrée des films.
 */
function filterFrenchDramas(movies) {
  return movies.filter((movie) => {
    return movie.genre_ids.includes(18) && movie.original_language === "fr";
  });
}

export default filterFrenchDramas;
