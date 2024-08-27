import Jurusan from "../../pages/Jurusan/Jurusan";
import Navbar from "../../components/Navbar/Navbar";

function Kuliah() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-900 dark:text-white">
        <Navbar />
        <Jurusan />
      </div>
    </div>
  );
}

export default Kuliah;
