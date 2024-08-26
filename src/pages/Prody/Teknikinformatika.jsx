import Navbar from "../../components/Navbar/Navbar";
import Semester from "../Semester/Semester";

function TeknikInformatika() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-white shadow-md">
        <Navbar />
        <div className="relative flex flex-col justify-center w-full px-3 align-top">
          <h1 className="pt-5 pb-10 text-3xl font-semibold text-center ">
            Teknik Informatika
          </h1>
          <Semester />
        </div>
      </div>
    </div>
  );
}

export default TeknikInformatika;
