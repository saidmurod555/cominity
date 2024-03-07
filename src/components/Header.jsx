import { Link } from "react-router-dom";
import Time from "../page/Time";

export default function Header() {
  return (
    <div>
      <header className="border">
        <nav className="flex justify-center fixed rounded-[8px] h-[55px] items-center  top-0 left-0 w-full  ">
          <ul className="flex  gap-[75px] text-[18px] ">
            <li className="border focus-within:bg-blue-400  focus-within:text-[#fff]">
              <Link to="/">Home</Link>
            </li>
            <li className="border focus-within:bg-blue-400  focus-within:text-[#fff]">
              <Link to="/Products">Products</Link>
            </li>
            <li className="border focus-within:bg-blue-400 focus-within:text-[#fff]">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <Time />
        </nav>
      </header>
    </div>
  );
}
