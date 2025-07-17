import { img_url } from "../contants";


const Restaurent = ({
  name,
  avgRating,
  deliverytime,
  cuisines,
  locality,
  imgId,
}) => {
  // const { name, avgRating, deliverytime, cuisines, locality, imgId } = props;

  return (
    <>
      <div className="w-full content ">
        <div className="card">
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
        </div>
      </div>
    </>
  );
};


export default Restaurent;
