// import { fetchPopularSeries } from "@/lib/series";

import { loadHomePageData } from "@/lib/dataFetchers";
import Series from "@/components/PagesDashboard/Series/Series";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import NavLinks from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks/NavLinks";
import { NavWrapper } from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks/NavLinks.styled";

function series({ popularSeries }) {
  return (
    <>
      <NavWrapper>
        <LogoLink />
        <NavLinks />
      </NavWrapper>

      <Series series={popularSeries} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: {
      popularSeries: data.popularSeries,
      // Et toute autre donnée que vous pourriez vouloir transmettre en tant que props
    },
  };
}

export default series;
