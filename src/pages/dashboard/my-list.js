import MyListPage from "@/components/MyList/MyList";
import BackgroundVideo from "@/components/PagesDashboard/ComponentsDashboard/BackgroundVideo/BackgroundVideo";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";

function myList() {
  return (
    <>
      <NavWithScroll />
      <BackgroundVideo
        videoPath="/assets/videos/backgroundVideo1.mp4"
        title="Plongée dans les profondeurs de l'océan"
      />

      <MyListPage />
    </>
  );
}

export default myList;
