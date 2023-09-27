import React from "react";
// import Image from "next/image";

function Movies({ movies }) {
  return (
    <div>
      <h2>Films</h2>
      <div>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movies;
