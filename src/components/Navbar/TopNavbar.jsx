import { CiSettings } from "react-icons/ci";
import Logo from "/src/assets/logo/logo_light.png";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <nav className="flex items-center w-full justify-between max-w-[1280px] px-4 py-2 mx-auto bg-white shadow-md sticky top-0 z-50">
      <Link to="/">
        <div className="w-40">
          <img src={Logo} alt="Kuliah AI" />
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <button className="text-4xl text-black">
          <CiSettings />
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
