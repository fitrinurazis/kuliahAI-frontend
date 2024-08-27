import { useContext } from "react";
import Logo from "/src/assets/logo/logo_light.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../../components/Navbar/HamburgerMenu";
import { DarkMode } from "../DarkMode/DarkMode";

const TopNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <nav className="flex items-center w-full justify-between max-w-[1280px] px-4 py-2 mx-auto sticky top-0 z-50 bg-gray-100 dark:bg-gray-900 ">
      <Link to="/">
        <div className="w-40">
          <img src={Logo} alt="Kuliah AI" />
        </div>
      </Link>
      <div>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul
          className={`absolute w-full text-center bg-gray-100 dark:bg-gray-900 top-16 left-0 z-10 pb-10  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-1 text-xl hover:text-sky-500 dark:text-white">
            <Link to="/pengaturan">Pengaturan</Link>
          </li>
          <li className="p-1 text-xl hover:text-sky-500 dark:text-white">
            <Link to="/dukung_kami">Dukung Kami</Link>
          </li>
          <li className="p-1 text-xl hover:text-sky-500 dark:text-white">
            <Link to="/tentang_kami">Tentang Kami</Link>
          </li>
          <li
            onClick={() => setDarkMode(!darkMode)}
            className="p-1 text-xl text-center text-black bg-gray-100 cursor-pointer dark:bg-gray-900 dark:text-white hover:text-sky-500"
          >
            {darkMode ? "Tema Terang" : "Tema Gelap"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
