import { Link } from "react-router-dom";
import donate from "../../assets/logo/donate.jpg";
import coffe from "../../assets/logo/coffe.jpg";

const CardSupportMe = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mx-auto">
      <Link to="https://saweria.co/KuliahAi">
        <div className="flex flex-col items-center justify-center w-36 gap-3 p-2 border-2 border-black rounded-lg shadow-lg h-[19rem] shadow-gray-900 dark:border-sky-700 dark:shadow-gray-500">
          <img className="w-40 rounded-lg" src={donate} />
          <p className="text-sm text-center font-poppins">
            Selalu memberi tanpa mengingat dan menerima tanpa melupakan
          </p>
          <div className="w-full py-2 text-sm font-semibold text-center rounded-lg bg-sky-500">
            <p>DONASI Rp 5.000</p>
          </div>
        </div>
      </Link>
      <Link to="https://saweria.co/KuliahAi ">
        <div className="flex flex-col items-center justify-center w-36 gap-8 h-[19rem] p-2 border-2 border-black rounded-lg shadow-lg shadow-gray-900 dark:border-sky-700 dark:shadow-gray-500">
          <img className="w-40 rounded-lg" src={coffe} />
          <p className="text-sm text-center font-poppins">
            Traktir aku secangkir kopi.
          </p>
          <div className="w-full py-2 text-sm font-semibold text-center rounded-lg bg-sky-500">
            <p>DONASI Rp 9.900</p>
          </div>
        </div>
      </Link>
      <Link to="https://saweria.co/KuliahAi">
        <div className="flex flex-col items-center justify-center w-36 gap-3 p-2 h-[19rem] border-2 border-black rounded-lg shadow-lg shadow-gray-900 dark:border-sky-700 dark:shadow-gray-500">
          <img className="w-40 rounded-lg" src={donate} />
          <p className="text-sm text-center font-poppins">
            Donasi anda akan membantu dalam pemeliharaan Kuliah AI.
          </p>
          <div className="w-full py-2 text-sm font-semibold text-center rounded-lg bg-sky-500">
            <p>DONASI Rp 19.500</p>
          </div>
        </div>
      </Link>
      <Link to="https://saweria.co/KuliahAi">
        <div className="flex flex-col items-center justify-center w-36 gap-10 p-2 h-[19rem] border-2 border-black rounded-lg shadow-lg shadow-gray-900 dark:border-sky-700 dark:shadow-gray-500">
          <img className="w-40 rounded-lg" src={donate} />
          <p className="text-sm text-center font-poppins">Kamu yang terbaik.</p>
          <div className="w-full py-2 text-sm font-semibold text-center rounded-lg bg-sky-500">
            <p>DONASI Rp 49.000</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardSupportMe;
