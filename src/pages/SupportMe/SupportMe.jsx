import Navbar from "../../components/Navbar/Navbar";
import CardSupportMe from "../../components/Card/CardSupportMe";

const SupportMe = () => {
  return (
    <div className="pb-10 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="relative flex flex-col justify-center w-full px-1 align-top">
          <h1 className="pt-5 pb-10 text-2xl font-semibold text-center dark:text-gray-100 ">
            Dukung Kami
          </h1>
          <CardSupportMe />
        </div>
        <div className="pt-20 text-center">
          <p>©2024 Kuliah_AI</p>
        </div>
      </div>
    </div>
  );
};

export default SupportMe;
