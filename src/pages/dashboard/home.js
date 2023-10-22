import { loadHomePageData } from "@/lib/dataFetchers";

import TrendingSeries from "@/components/PagesDashboard/ComponentsDashboard/TrendingSeries/TrendingSeries";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";

function home({ trendingSeries }) {
  return (
    <>
      <NavWithScroll />
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
