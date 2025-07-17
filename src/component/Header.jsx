import logo_img from "/src/assets/logo.png";
import Searchbar from "./Searchbar";

const Header = () => {
  return (
    <div className="fluid-container flex justify-between p-7 shadow-lg ">
      <div>
        <img className="logo" id="logo" src={logo_img} alt="logo" />
      </div>
      <Searchbar />
      <div>
        <ul className="flex gap-7 font-semibold text-orange-600 fonts text-lg">
          <li>
            <a className="hover:text-rose-700" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-rose-700" href="#">
              about
            </a>
          </li>
          <li>
            <a className="hover:text-rose-700" href="#">
              FAQ
            </a>
          </li>
          <li>
            <a className="hover:text-rose-700" href="#">
              Conatct
            </a>
          </li>
          <li>
            <a className="hover:text-rose-700" href="#">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
