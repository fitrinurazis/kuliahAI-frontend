import { useContext, useEffect } from "react";
import Logo from "/src/assets/logo/logo_light.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import HamburgerMenu from "./HamburgerMenu";
import DarkMode from "../DarkMode/DarkMode";

const NavbarDashboard = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const { darkMode, setDarkMode } = useContext(DarkMode);
  const toggleTheme = () => {
    setDarkMode(darkMode === "light" ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 flex flex-col w-full max-w-md px-4 py-2 mx-auto bg-gray-100 dark:bg-gray-800 ">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} alt="Kuliah AI" className="w-40" />
        </Link>
        <div className="text-4xl ">
          <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <div
        className={`fixed left-0 w-full h-full bg-gray-900 bg-opacity-50 top-16 transition-transform duration-300 ease-in-out ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="z-10 flex flex-col items-start justify-start w-1/2 h-full pt-5 pb-10 pl-5 font-semibold bg-gray-100 dark:bg-gray-700 ">
          <ul>
            <li className="p-1 text-xl hover:text-sky-500 hover:dark:text-sky-500 dark:text-white">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li className="p-1 text-xl hover:text-sky-500 hover:dark:text-sky-500 dark:text-white">
              <Link to="/add-kuliah">Kuliah AI</Link>
            </li>
            <li className="p-1 text-xl hover:text-sky-500 hover:dark:text-sky-500 dark:text-white">
              <Link to="/add-ebook">Ebook</Link>
            </li>
            <li className="p-1 text-xl hover:text-sky-500 hover:dark:text-sky-500 dark:text-white">
              <Link to="/add-aplikasi">Aplikasi</Link>
            </li>
          </ul>
          <button
            onClick={() => {
              toggleTheme();
              toggleMenu();
            }}
            className="flex items-center justify-center gap-3 p-1 text-xl text-center text-black cursor-pointer dark:text-white hover:text-sky-500 bg-none hover:dark:text-sky-500"
          >
            {darkMode === "dark" ? (
              <>
                Tema Terang <MdOutlineDarkMode />
              </>
            ) : (
              <>
                Tema Gelap <MdDarkMode />
              </>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard;
