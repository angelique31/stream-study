import MyListPage from "@/components/ListPage/MyList/MyList";
import NavWithScroll from "@/components/PagesDashboard/ComponentsDashboard/NavBar/NavWithScroll/NavWithScroll";

function myList() {
  return (
    <>
      <NavWithScroll />

      <div style={{ backgroundColor: "black", height: "900px", width: "100%" }}>
        <h1
          style={{ color: "white", paddingTop: "100px", marginLeft: "100px" }}
        >
          Ma Liste
        </h1>
        <MyListPage />
      </div>
    </>
  );
}

export default myList;
