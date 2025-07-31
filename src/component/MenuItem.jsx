const MenuItem = (props) => {
  const { title, price, rating, cuisine } = props;

  const isveg = true;
  return (
    <>
      <div className="container flex justify-between">
        <div>
          <p>{isveg ? "Veg" : "Non-Veg"}</p>
          <p>{title}</p>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{cuisine}</p>
        </div>
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/11/29/dc90cc06-f883-430d-be4b-75141c8064d9_6b832721-694c-4df4-96f0-308388144da0.jpg"
            alt="Burger"
            height={200}
            width={200}
          />
        </div>
      </div>
    </>
  );
};

export default MenuItem;
