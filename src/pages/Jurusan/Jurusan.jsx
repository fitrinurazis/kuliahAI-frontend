import { Link } from "react-router-dom";
import jurusanData from "../../json/jurusan.json";

function Jurusan() {
  return (
    <div className="flex flex-col w-full px-2 ">
      <h1 className="pt-5 pb-10 text-3xl font-semibold text-center font-dmserif ">
        Program Study
      </h1>
      <div className="flex justify-center gap-3 px-3">
        <ul className="flex flex-col justify-center w-full gap-5 text-center">
          {jurusanData.jurusan.map((jurusan) => (
            <Link key={jurusan.id} to={jurusan.link}>
              <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-sky-700">
                <span>{jurusan.text}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Jurusan;
