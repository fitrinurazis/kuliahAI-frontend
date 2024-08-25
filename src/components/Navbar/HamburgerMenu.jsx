/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button className=" md:hidden focus:outline-none" onClick={toggleMenu}>
      {isOpen ? (
        <IoMdClose className="absolute z-20 text-4xl right-5 top-4" />
      ) : (
        <GiHamburgerMenu className="text-4xl" />
      )}
    </button>
  );
};

export default HamburgerMenu;
