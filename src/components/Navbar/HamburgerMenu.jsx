/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button
      className=" md:hidden focus:outline-none hover:text-sky-500 bg-none hover:dark:text-sky-500"
      onClick={toggleMenu}
    >
      {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    </button>
  );
};

export default HamburgerMenu;
