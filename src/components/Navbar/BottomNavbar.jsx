import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { RiGraduationCapLine } from "react-icons/ri";
import { DiAppstore } from "react-icons/di";
import { IoMdBook } from "react-icons/io";
import { Link } from "react-router-dom";

function BottomNavbar() {
  return (
    <nav className="flex items-center justify-between max-w-[1280px] px-4 py-2 mx-auto bg-white shadow-md sticky w-full bottom-0 z-50">
      <Link to="/">
        <div className="sticky bottom-0 flex flex-col items-center text-center hover:text-sky-700">
          <RiGraduationCapLine className="text-4xl" />
          <p className="text-xs">Kuliah Online</p>
        </div>
      </Link>
      <Link to="/chat">
        <div className="flex flex-col items-center text-center hover:text-sky-700">
          <IoChatboxEllipsesOutline className="text-4xl" />
          <p className="text-xs">Chat AI</p>
        </div>
      </Link>
      <Link to="/ebook">
        <div className="flex flex-col items-center text-center hover:text-sky-700">
          <IoMdBook className="text-4xl" />
          <p className="text-xs">E-books</p>
        </div>
      </Link>
      <Link to="/app">
        <div className="flex flex-col items-center text-center hover:text-sky-700">
          <DiAppstore className="text-4xl" />
          <p className="text-xs">Application</p>
        </div>
      </Link>
    </nav>
  );
}

export default BottomNavbar;
