import develop from "../../assets/logo/develop page.png";

const UnavailablePage = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-md min-h-screen px-3 mx-auto text-center dark:bg-gray-800 dark:text-white font-poppins">
      <img src={develop} />
      <p className="pt-10">
        Halaman ini masih dalam tahap pengembangan. Nantikan pembaharuan
        selanjutnya.
      </p>
    </div>
  );
};

export default UnavailablePage;
