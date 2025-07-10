// import IMG from "/src/assets/img.jpg"
// import {link} from "../contants"
import { Menu_Image_Link } from "../contants";

const MenuCardContainer = ({ title, IMG_LINK }) => {
  // console.log(IMG_LINK)
  return (
    <>
      <div className="MenuCardContainer">
        <img src={Menu_Image_Link + IMG_LINK} className="items" alt={title} />
      </div>
    </>
  );
};

export default MenuCardContainer;
