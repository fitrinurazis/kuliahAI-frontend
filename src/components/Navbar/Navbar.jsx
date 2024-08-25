import Logo from "/src/assets/logo/logo_light.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import HamburgerMenu from "../../components/Navbar/HamburgerMenu";

const TopNavbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center w-full justify-between max-w-[1280px] px-4 py-2 mx-auto sticky top-0 z-50">
      <Link to="/">
        <div className="w-40">
          <img src={Logo} alt="Kuliah AI" />
        </div>
      </Link>
      <div>
        <HamburgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <ul
          className={`absolute w-full text-center bg-white top-16 left-0 z-10  ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="p-1 text-xl hover:text-sky-500">
            <Link to="/pengaturan">Pengaturan</Link>
          </li>
          <li className="p-1 text-xl hover:text-sky-500">
            <Link to="/tema">Tema</Link>
          </li>
          <li className="p-1 text-xl hover:text-sky-500">
            <Link to="/dukung_kami">Dukung Kami</Link>
          </li>
          <li className="p-1 text-xl hover:text-sky-500">
            <Link to="/tentang_kami">Tentang Kami</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
