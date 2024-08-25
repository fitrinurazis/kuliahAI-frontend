import { Link } from "react-router-dom";

function Jurusan() {
  return (
    <div className="flex flex-col w-full px-2">
      <div className="flex justify-center gap-3">
        <ul className="flex flex-col justify-center w-full gap-3 text-center">
          <Link to="/ti">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 1</span>
            </li>
          </Link>
          <Link to="/ik">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 2</span>
            </li>
          </Link>
          <Link to="/si">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 3</span>
            </li>
          </Link>
          <Link to="/dkv">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 4</span>
            </li>
          </Link>
          <Link to="/tk">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 5</span>
            </li>
          </Link>
          <Link to="/ap">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 6</span>
            </li>
          </Link>
          <Link to="/akuntansi">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 7</span>
            </li>
          </Link>
          <Link to="/manajemen">
            <li className="p-3 border-2 rounded-lg border-sky-700">
              <span>Semester 8</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Jurusan;
