import { loadHomePageData } from "@/lib/dataFetchers";
import Movies from "@/components/PagesDashboard/Movies/Movies";
import { NavWrapper } from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks.styled";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import NavLinks from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks";

function movies({ popularMovies }) {
  return (
    <>
      <NavWrapper>
        <LogoLink />
        <NavLinks />
      </NavWrapper>

      <Movies movies={popularMovies} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularMovies: data.popularMovies,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default movies;
