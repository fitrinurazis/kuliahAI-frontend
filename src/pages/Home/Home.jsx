import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <Link to="/kuliah">Kuliah Ai</Link>
        <Link to="/kuliah">Chat AI</Link>
        <Link to="/kuliah">Ebook</Link>
        <Link to="/kuliah">Aplikasi</Link>
      </div>
    </div>
  );
}

export default Home;
