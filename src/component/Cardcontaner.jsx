import Restaurent from "./Restaurent.jsx";
import { useEffect, useState } from "react";
import { API_URL } from "../contants.js";

const Cardcontainer = () => {
  const [restaurentData, setRestaurentData] = useState([]);

  // const resdata = [
  //     {
  //         title:"Seoul Burgers & fries burger Seoul Burgers & fries burger",
  //         rating:"4.5",
  //         deliverytime:"40-45 mins",
  //         cuisine:"Burger, Bubble Teea",
  //         location:"Ghatkkopar East",
  //     },
  //     {
  //         title:"McDonald's",
  //         rating:"4.3",
  //         deliverytime:"45-50 mins",
  //         cuisine:"Burger, Beverages",
  //         location:"Andheri West",
  //     },
  //     {
  //         title:"BOSS Burger",
  //         rating:"4.0",
  //         deliverytime:"30-35 mins",
  //         cuisine:"Samosalicious Smash Burger",
  //         location:"Bandra East",
  //     },
  //     {
  //         title:"Burger King",
  //         rating:"4.3",
  //         deliverytime:"45-50 mins",
  //         cuisine:"American Burger, Fast Food",
  //         location:"Powai",
  //     },
  //     {
  //         title:"Good Flippin",
  //         rating:"4.5",
  //         deliverytime:"25-30 mins",
  //         cuisine:"Burrger and Fries, Cold Drinks",
  //         location:"Marin Line",
  //     },
  //     {
  //         title:"Bombay Burger",
  //         rating:"3.5",
  //         deliverytime:"30-35 mins",
  //         cuisine:"Ameican, Snacks",
  //         location:"Sion",
  //     },
  //     {
  //         title:"Burger Bomb",
  //         rating:"4.0",
  //         deliverytime:"45-50 mins",
  //         cuisine:"Burger, Snacks, Cafe",
  //         location:"Bhandup",
  //     },
  //     {
  //         title:"Movie Max",
  //         rating:"3.9",
  //         deliverytime:"35-40 mins",
  //         cuisine:"Bevrages, Fast food",
  //         location:"Marol Naka",
  //     },
  // // ];

  const getData = async () => {
    try {
      const data = await fetch(API_URL);
      const json = await data.json();
      //   console.log(
      //     "json",
      //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      //       ?.restaurants
      //   );
      // console.log("json",json?.data?.cards[0]);
      setRestaurentData(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="mx-28 mt-8 mb-3.5 font-bold text-xl">
        <h1>Top restaurant chains in Mumbai</h1>
      </div>

      <div className=" p-5 grid grid-cols-4 container mx-auto">
        {restaurentData.map((restaurents) => {
          return (
            <Restaurent
              name={restaurents?.info?.name}
              avgRating={restaurents?.info?.avgRating}
              deliverytime={restaurents?.info?.sla?.slaString}
              cuisines={restaurents?.info?.cuisines}
              locality={restaurents?.info?.locality}
              imgId={restaurents?.info?.cloudinaryImageId}
              // {...restaurent}
              key={restaurents?.info?.id}
            />
          );
        })}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
        {/* <restaurent /> */}
      </div>
    </>
  );
};

export default Cardcontainer;
