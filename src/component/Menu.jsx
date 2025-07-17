import { useEffect, useState } from "react";
import MenuCardContainer from "./MenuCardContainer.jsx";
import { API_URL } from "../contants.js";

function Menu() {
  const [menuData, setMenuData] = useState([]);

  const getData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();

      // console.log(
      //   "json",
      //   json?.data?.cards[0].card?.card?.gridElements?.infoWithStyle?.info
      // );
      setMenuData(
        json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  //   console.log(menuData);
  return (
    <>
      <div className="mx-28 font-bold text-3xl mt-10">
        <h1>What's on your mind?</h1>
      </div>

      <div className="mx-40">
        <div className="Carousels-Card container justify-start w-full overflow-x-auto overflow-y-hidden scrollbar-hide">
          {menuData?.map((info, index) => {
            return (
              <MenuCardContainer
                IMG_LINK={info?.imageId}
                title={info?.action?.text}
                key={info?.id}
              />
            );
          })}

          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
          {/* <MenuCardContainer /> */}
        </div>
      </div>
    </>
  );
}

export default Menu;
