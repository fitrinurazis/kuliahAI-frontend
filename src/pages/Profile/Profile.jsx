import Navbar from "../../components/Navbar/Navbar";
import profil from "../../assets/profil/1.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="pb-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center gap-5 py-5 ">
          <img src={profil} className="border-4 rounded-full w-36 " />
          <Link to="/profil/editfotoprofil">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Edit Foto
            </button>
          </Link>
        </div>
        <form className="flex flex-col w-full gap-3 px-3 pt-10">
          <h1 className="text-lg font-poppins ">Edit Informasi Pribadi </h1>
          <input
            className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-white font-poppins`}
            type="text"
            name="nama"
            placeholder="Nama"
          />

          <input
            className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-white font-poppins`}
            type="text"
            name="nim"
            placeholder="No Hp"
          />

          <input
            className={`mt-1 block w-full px-3 py-2 border dark:bg-gray-800  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:text-white font-poppins`}
            name="email"
            type="email"
            placeholder="Email"
          />

          <div className="flex items-center justify-between"></div>
          <div className="flex justify-center gap-5 ">
            <button
              type="submit"
              className="px-4 py-2 font-bold text-white rounded-lg bg-sky-700 hover:bg-sky-500 focus:outline-none focus:shadow-outline"
            >
              Simpan
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

export default Profile;
