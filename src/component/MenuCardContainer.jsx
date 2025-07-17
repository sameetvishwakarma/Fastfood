// import IMG from "/src/assets/img.jpg"
// import {link} from "../contants"
import { Menu_Image_Link } from "../contants";

const MenuCardContainer = ({ title, IMG_LINK }) => {
  // console.log(IMG_LINK)
  return (
    <>
      <div className="Carousels-Card w-[120px] min-w-[176px] shadow-lg object-cover overflow-hidden">
        <img
          src={Menu_Image_Link + IMG_LINK}
          className="Carousels-items"
          alt={title}
        />
      </div>
    </>
  );
};

export default MenuCardContainer;
