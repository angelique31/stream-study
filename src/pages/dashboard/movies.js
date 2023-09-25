import NavLinks from "@/components/ComponentsDashboard/NavBar/NavLinks";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";

import { fetchPopularMovies } from "@/lib/movies";

import { NavWrapper } from "../../components/ComponentsDashboard/NavBar/NavLinks.styled";

function movies({ movies }) {
  return (
    <>
      <NavWrapper>
        <LogoLink />
        <NavLinks />
      </NavWrapper>

      <div>
        <h1>Films</h1>

        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const movies = await fetchPopularMovies();
  // console.log("Films populaires (dans le composant):", movies);
  return {
    props: {
      movies,
    },
  };
}

export default movies;
