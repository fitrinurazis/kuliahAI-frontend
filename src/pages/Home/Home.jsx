import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Quote from "../../components/Quote/Quote";

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <Quote />
        <div className="flex flex-col gap-10 font-semibold font-poppins">
          <div className="flex items-center justify-center gap-10">
            <Link to="/kuliah">
              <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500 hover:bg-sky-800 hover:border-slate-200 hover:text-slate-200 hover:shadow-sky-700 hover:dark:bg-sky-800 hover:dark:border-slate-200 hover:dark:text-slate-200 hover:dark:shadow-sky-700 ">
                Kuliah Ai
              </div>
            </Link>
            <Link to="/halaman-tidak-ada">
              <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500 hover:bg-sky-800 hover:border-slate-200 hover:text-slate-200 hover:shadow-sky-700 hover:dark:bg-sky-800 hover:dark:border-slate-200 hover:dark:text-slate-200 hover:dark:shadow-sky-700 ">
                Chat Ai
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-10">
            <Link to="/halaman-tidak-ada">
              <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500 hover:bg-sky-800 hover:border-slate-200 hover:text-slate-200 hover:shadow-sky-700 hover:dark:bg-sky-800 hover:dark:border-slate-200 hover:dark:text-slate-200 hover:dark:shadow-sky-700 ">
                Ebook
              </div>
            </Link>
            <Link to="/halaman-tidak-ada">
              <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500 hover:bg-sky-800 hover:border-slate-200 hover:text-slate-200 hover:shadow-sky-700 hover:dark:bg-sky-800 hover:dark:border-slate-200 hover:dark:text-slate-200 hover:dark:shadow-sky-700 ">
                Aplikasi
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
