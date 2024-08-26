import Jurusan from "../../pages/Jurusan/Jurusan";
import Navbar from "../../components/Navbar/Navbar";

function Kuliah() {
  return (
    <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-white shadow-md">
      <Navbar />
      <Jurusan />
    </div>
  );
}

export default Kuliah;
