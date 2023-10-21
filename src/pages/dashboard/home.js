import { loadHomePageData } from "@/lib/dataFetchers";
import NavLinks from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks/NavLinks";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import {
  NavWrapper,
  MenuAndSearchWrapper,
} from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavLinks/NavLinks.styled";
import TrendingSeries from "@/components/PagesDashboard/ComponentsDashboard/TrendingSeries/TrendingSeries";
import SearchInput from "@/components/PagesDashboard/ComponentsDashboard/NavBar/SearchInput/SearchInput";

import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavBarContainer from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavBarContainer/NavBarContainer";

function home({ trendingSeries }) {
  return (
    <>
      <NavWrapper>
        {/* <LogoLink /> */}

        <NavBarContainer />
        <MenuAndSearchWrapper>
          <SearchInput />
        </MenuAndSearchWrapper>
      </NavWrapper>
      <BackgroundVideo />
      <TrendingSeries series={trendingSeries} />
      <TrendingSeries series={trendingSeries} />
    </>
  );
}
export async function getServerSideProps() {
  const data = await loadHomePageData();

  return {
    props: data,
  };
}

export default home;
