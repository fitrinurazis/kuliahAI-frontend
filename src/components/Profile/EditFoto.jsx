import Navbar from "../Navbar/Navbar";
import profil from "../../assets/profil/1.jpg";
import { Link } from "react-router-dom";

const EditFoto = () => {
  return (
    <div className="pb-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-5 py-5 ">
          <img src={profil} className="border-4 rounded-full w-36 " />
        </div>
        <form className="flex flex-col w-full px-4 ">
          <label className="py-3 text-lg">Upload Foto</label>
          <input
            type="file"
            className="leading-tight text-gray-700 border rounded-lg shadow appearance-none focus:outline-none dark:bg-gray-800 focus:shadow-outline dark:text-white font-poppins"
          />
          <div className="flex justify-center gap-5 py-5">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Simpan Foto
            </button>
            <Link to="/profil">
              <button
                type="submit"
                className="px-4 py-2 font-bold text-white bg-red-700 rounded-lg hover:bg-red-500 focus:outline-none focus:shadow-outline"
              >
                Batal
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFoto;
