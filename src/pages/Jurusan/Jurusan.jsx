import { Link } from "react-router-dom";

function Jurusan() {
  return (
    <div className="flex flex-col w-full px-2 ">
      <h1 className="pt-5 pb-10 text-3xl font-semibold text-center font-dmserif ">
        Program Study
      </h1>
      <div className="flex justify-center gap-3 px-3">
        <ul className="flex flex-col justify-center w-full gap-3 text-center">
          <Link to="/ti">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Teknik Informatika </span>
            </li>
          </Link>
          <Link to="/sk">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Sistem Komputer </span>
            </li>
          </Link>
          <Link to="/si">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Sistem Informasi </span>
            </li>
          </Link>
          <Link to="/dkv">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Desain Komunikasi Visual </span>
            </li>
          </Link>
          <Link to="/ak">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Akuntansi </span>
            </li>
          </Link>
          <Link to="/mm">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Management </span>
            </li>
          </Link>
          <Link to="/bsn">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Bisnis </span>
            </li>
          </Link>
          <Link to="/hk">
            <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
              <span>Hukum </span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Jurusan;
