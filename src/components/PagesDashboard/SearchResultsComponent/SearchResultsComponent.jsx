import React from "react";

import CategorySeries from "../ComponentsDashboard/CategorySeries/CategorySeries";

const SearchResultsComponent = ({ results }) => {
  if (!results.length) return null;
  return (
    <div className="search-results-container">
      <CategorySeries title="Résultats de recherche" data={results} />
    </div>
  );
};

export default SearchResultsComponent;
