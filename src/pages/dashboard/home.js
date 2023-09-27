import { loadHomePageData } from "@/lib/dataFetchers";
import NavLinks from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import { NavWrapper } from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks.styled";
import TrendingSeries from "@/components/PagesDashboard/ComponentsDashboard/TrendingSeries/TrendingSeries";

function home({ trendingSeries }) {
  return (
    <>
      <NavWrapper>
        <LogoLink />
        <NavLinks />
      </NavWrapper>

      <div>
        <h1>Bienvenue sur le site</h1>
      </div>
      <TrendingSeries series={trendingSeries} />
    </>
  );
}
export async function getServerSideProps() {
  const data = await loadHomePageData();

  // Ici, vous pouvez ajouter un log pour inspecter la structure des données
  console.log(data);

  return {
    props: data,
  };
}

export default home;
