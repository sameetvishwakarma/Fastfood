import MenuItem from "./MenuItem";

const Category = () => {
  const resdata = [
    {
      title: "Crispy Veg Burger",
      price: "₹234",
      rating: "4.5",
      cuisine: "Burger, Bubble Teea",
    },
    {
      title: "Crispy Veg Double Patty Burger",
      price: "₹70",
      rating: "4.5",
      cuisine: "Burger, Bubble Teea",
    },
    {
      title: "King Peri Peri Fries",
      price: "₹99 ",
      rating: "4.5",
      cuisine: "Burger, Bubble Teea",
    },
    {
      title: "4 Crispy Veg + 2 Medium Fries",
      price: "₹499",
      rating: "4.5",
      cuisine: "Burger, Bubble Teea",
    },
    {
      title: "Crispy Veg Double Patty + Crispy Veg Double Patty",
      price: "₹189",
      rating: "4.5",
      cuisine: "Burger, Bubble Teea",
    },
  ];

  return (
    <>
      <h1 className="semi-bold text-3xl">NIC Ice Cream</h1>
      <div className="container grid grid-cols-1 md:grid-cols-1 gap-4">
        <MenuItem
          title={resdata.title}
          price={resdata.price}
          rating={resdata.rating}
          cuisine={resdata.cuisine}
        />
        <MenuItem
          title={resdata.title}
          price={resdata.price}
          rating={resdata.rating}
          cuisine={resdata.cuisine}
        />
        <MenuItem
          title={resdata.title}
          price={resdata.price}
          rating={resdata.rating}
          cuisine={resdata.cuisine}
        />
        <MenuItem
          title={resdata.title}
          price={resdata.price}
          rating={resdata.rating}
          cuisine={resdata.cuisine}
        />
      </div>
    </>
  );
};

export default Category;
