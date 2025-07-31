import { img_url } from "../contants";
import { Link } from "react-router-dom";

const Restaurent = (props) => {
  const { name, avgRating, deliverytime, cuisines, locality, imgId, id } =
    props;

  return (
    <>
      <div className="w-full content ">
        <div className="card">
          <Link
            to={`/restaurant/${name}-${locality.replace("   ", "-")}-rest${id}`}
          >
            <img
              className="card-img"
              src={`${img_url + imgId}`}
              alt="restaurant"
            />

            <h1 className="card-title">{name}</h1>
            <div className="card-info">
              <p>{avgRating}</p>
              <p>{deliverytime}</p>
            </div>
            <p className="card-text">{cuisines?.join(", ")}</p>
            <p className="card-text">{locality}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Restaurent;
