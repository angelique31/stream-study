import NavLinks from "@/components/ComponentsDashboard/NavBar/NavLinks";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import { fetchPopularSeries } from "@/lib/series";
import { NavWrapper } from "../../components/ComponentsDashboard/NavBar/NavLinks.styled";

function series({ series }) {
  return (
    <>
      <NavWrapper>
        <LogoLink />
        <NavLinks />
      </NavWrapper>

      <div>
        <h1>Séries</h1>

        <ul>
          {series.map((serie) => (
            <li key={serie.id}>{serie.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const series = await fetchPopularSeries();

  return {
    props: {
      series,
    },
  };
}

export default series;
