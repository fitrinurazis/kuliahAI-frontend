import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

const AboutMe = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800">
      <div className="max-w-md min-h-screen mx-auto bg-gray-100 dark:bg-gray-800 dark:text-white">
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
          <div className="pt-20 ">
            <h1 className="text-2xl font-semibold">Hubungi kami</h1>
            <div className="flex flex-col pt-4">
              <Link to="https://api.whatsapp.com/send/?phone=6281382923343">
                <p className="flex items-center gap-2">
                  <IoLogoWhatsapp className="text-xl text-green-600" />
                  <span className="hover:text-sky-500">081382923343</span>
                </p>
              </Link>
              <Link to="https://api.whatsapp.com/send/?phone=6281578375430">
                <p className="flex items-center gap-2 ">
                  <IoLogoWhatsapp className="text-xl text-green-600" />
                  <span className="hover:text-sky-500">081578375430</span>
                </p>
              </Link>
              <Link to="https://instagram.com">
                <p className="flex items-center gap-2 ">
                  <AiFillInstagram className="text-xl text-orange-400" />
                  <span className="hover:text-sky-500">@kuliahAI</span>
                </p>
              </Link>
            </div>
          </div>
          <div className="pt-20 pb-10 text-center">
            <p>©2024 Kuliah_AI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
