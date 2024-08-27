import Navbar from "../../components/Navbar/Navbar";
import Semester from "../Semester/Semester";

function Akuntansi() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="relative flex flex-col justify-center w-full px-3 align-top">
          <h1 className="pt-5 pb-10 text-3xl font-semibold text-center dark:text-gray-100 ">
            Akuntansi
          </h1>
          <Semester />
        </div>
      </div>
    </div>
  );
}

export default Akuntansi;
