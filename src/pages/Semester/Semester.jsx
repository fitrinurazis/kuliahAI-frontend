import { Link } from "react-router-dom";
import semesterData from "../../json/semester.json";

function Semester() {
  return (
    <div className="flex flex-col w-full px-2">
      <div className="flex justify-center gap-3">
        <ul className="flex flex-col justify-center w-full gap-5 text-center dark:text-gray-100">
          {semesterData.semester.map((semester) => (
            <Link key={semester.id} to={semester.link}>
              <li className="p-2 text-xl font-bold border-2 rounded-lg border-sky-700 ">
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
