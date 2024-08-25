import BottomNavbar from "../../components/Navbar/BottomNavbar";
import TopNavbar from "../../components/Navbar/TopNavbar";
import Jurusan from "../../pages/Jurusan/Jurusan";

function Kuliah() {
  return (
    <div className="bg-gray-100 ">
      <div className="relative flex flex-col items-center justify-between max-w-md min-h-screen mx-auto bg-white shadow-md">
        <TopNavbar />
        <div className="relative top-0 flex flex-col justify-center w-full px-3">
          <h1 className="pt-5 pb-10 text-3xl font-semibold text-center ">
            Program Study
          </h1>
          <Jurusan />
        </div>
        <BottomNavbar />
      </div>
    </div>
  );
}

export default Kuliah;
