import React from "react";
// import Image from "next/image";

function Series({ series }) {
  return (
    <div>
      <h1>Séries</h1>

      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Series;
