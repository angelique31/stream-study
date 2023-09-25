import NavLinks from "@/components/ComponentsDashboard/NavBar/NavLinks";
import LogoLink from "@/components/HomeAuthLinks/LogoLink/LogoLink";
import { NavWrapper } from "../../components/ComponentsDashboard/NavBar/NavLinks.styled";
import TrendingSeries from "@/components/ComponentsDashboard/TrendingSeries/TrendingSeries";
import { loadHomePageData } from "@/lib/dataFetchers";

// function home() {
//   return (
//     <>
//       <NavWrapper>
//         <LogoLink />
//         <NavLinks />
//       </NavWrapper>

//       <div>
//         <h1>Bienvenue sur le site</h1>
//       </div>
//     </>
//   );
// }

// export default home;

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
  return {
    props: data,
  };
}

export default home;
