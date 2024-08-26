import { Link } from "react-router-dom";

function Jurusan() {
  return (
    <div className="flex flex-col w-full px-2 ">
      <div className="flex justify-center gap-3">
        <ul className="flex flex-col justify-center w-full gap-3 text-center">
          <Link to="/teknik_informatika">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Teknik Informatika</span>
            </li>
          </Link>
          <Link to="/sistem_komputer">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Sistem Komputer </span>
            </li>
          </Link>
          <Link to="/si">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Sistem Informasi</span>
            </li>
          </Link>
          <Link to="/dkv">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Desain (DKV)</span>
            </li>
          </Link>
          <Link to="/tk">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Teknologi Komputer</span>
            </li>
          </Link>
          <Link to="/ap">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Akuntansi Perpajakan</span>
            </li>
          </Link>
          <Link to="/akuntansi">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Akuntansi</span>
            </li>
          </Link>
          <Link to="/manajemen">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Manajemen</span>
            </li>
          </Link>
          <Link to="/bisnis">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Bisnis</span>
            </li>
          </Link>
          <Link to="/hukum">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Hukum</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Jurusan;
