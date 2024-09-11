import Navbar from "../../components/Navbar/Navbar";

const AboutMe = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center justify-start max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
        <Navbar />
        <div className="relative flex flex-col justify-center w-full px-5 align-top">
          <h1 className="pt-5 pb-10 text-2xl font-semibold text-center dark:text-gray-100 ">
            Tentang Kami
          </h1>
          <div className=" text-md font-poppins">
            <p>
              <span className="font-semibold">Kuliah AI</span> adalah aplikasi
              yang dirancang untuk membantu mahasiswa dalam memahami materi
              kuliah dengan lebih mudah. Kami menyediakan rangkuman mata kuliah,
              ebook, dan aplikasi pendukung pembelajaran berbasis AI.
            </p>
            <br />
            <p>
              Tujuan kami adalah membuat proses belajar menjadi lebih efektif
              dan efisien, dengan materi yang mudah diakses kapan saja. Dengan
              Kuliah AI, belajar jadi lebih praktis dan menyenangkan.
            </p>
            <br />
            <p>
              Terima kasih telah mempercayai kami. Semoga harimu menyenangkan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
