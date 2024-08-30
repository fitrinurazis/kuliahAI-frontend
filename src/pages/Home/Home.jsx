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
            <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500">
              <Link to="/kuliah">Kuliah Ai</Link>
            </div>
            <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500">
              <Link to="/kuliah">Chat AI</Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-10">
            <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500">
              <Link to="/kuliah">Ebook</Link>
            </div>
            <div className="flex items-center justify-center border-2 border-black rounded-lg shadow-lg shadow-gray-900 w-28 h-28 dark:border-sky-700 dark:shadow-gray-500">
              <Link to="/kuliah">Aplikasi</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
