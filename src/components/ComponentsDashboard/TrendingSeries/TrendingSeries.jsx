import React from "react";

function TrendingSeries({ series }) {
  return (
    <div>
      <h2>Tendances de la semaine (Séries)</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrendingSeries;
