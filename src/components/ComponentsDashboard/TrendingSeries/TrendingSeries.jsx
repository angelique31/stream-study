import React from "react";
import Image from "next/image";
import {
  fetchTrendingSeries,
  fetchTrendingSeriesWithVideos,
} from "@/lib/trends";

function TrendingSeries({ series }) {
  return (
    <div>
      <h2>Tendances de la semaine (Séries)</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>
            <h3>{serie.name}</h3>

            {/* Image (affiche) */}
            {serie.poster_path && (
              <Image
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                width={450}
                height={350}
                // layout="responsive"
                // objectFit="cover"
              />
            )}

            {serie.video && (
              <iframe
                src={`https://www.youtube.com/embed/${serie.video}`}
                title={`Vidéo de ${serie.name}`}
                width="560"
                height="315"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}

            {/* Popularité */}
            <p>Popularité : {serie.popularity}</p>

            {/* Résumé */}
            {serie.overview && <p>{serie.overview}</p>}

            {/* Ici, je ne vois pas d'informations sur une vidéo directe dans les données, donc je laisse cette partie en commentaire. 
                 Si vous avez un endpoint pour récupérer une vidéo, vous pouvez l'utiliser. */}
            {/* {serie.video && <iframe src={`https://www.youtube.com/embed/${serie.video}`} title={`Video de ${serie.name}`} />} */}

            {/* Note : Vous pouvez également ajouter d'autres informations si vous le souhaitez, comme la date de première diffusion, le nombre de votes, etc. */}
          </li>
        ))}
      </ul>
    </div>
  );
}

// export async function getStaticProps() {
//   console.log("Inside getStaticProps");
//   // const series = await fetchTrendingSeries();
//   const series = await fetchTrendingSeriesWithVideos();

//   return {
//     props: { series },
//     revalidate: 60 * 60, // Cache pendant 1 heure.
//   };
// }

export default TrendingSeries;
