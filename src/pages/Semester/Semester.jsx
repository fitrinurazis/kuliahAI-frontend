import { Link } from "react-router-dom";
import semesterData from "../../json/semester.json";

function Semester() {
  return (
    <div className="flex flex-col w-full px-2 pb-20">
      <div className="flex justify-center gap-3">
        <ul className="flex flex-col justify-center w-full gap-5 text-center dark:text-gray-100">
          {semesterData.semester.map((semester) => (
            <Link key={semester.id} to={semester.link}>
              <li className="p-3 text-xl font-semibold border-2 rounded-lg font-poppins border-slate-400 dark:border-sky-700 hover:bg-sky-800 hover:border-slate-200 hover:text-slate-200 hover:dark:bg-sky-800 hover:dark:border-slate-200 hover:dark:text-slate-200 ">
                <span>{semester.text}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Semester;
