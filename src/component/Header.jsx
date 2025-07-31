import logo_img from "/src/assets/logo.png";
import Searchbar from "./Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Header = () => {
  <script
    src="https://kit.fontawesome.com/8b94f344a4.js"
    crossorigin="anonymous"
  ></script>;
  return (
    <div className="fluid-container flex justify-between p-[15px] shadow-lg ">
      <div>
        <Link to="/">
          <img className="logo" id="logo" src={logo_img} alt="logo" />
        </Link>
      </div>
      <Searchbar />
      <div>
        <ul className="flex gap-7 p-[14px] font-semibold text-orange-600 fonts text-lg">
          <li>
            <Link className="hover:text-rose-700">
              Home
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link className="hover:text-rose-700" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="hover:text-rose-700">FAQ</Link>
          </li>
          <li>
            <Link className="hover:text-rose-700" to="/contact">
              Conatct
            </Link>
          </li>
          <li>
            <Link className="hover:text-rose-700" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
