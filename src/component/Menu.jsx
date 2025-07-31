import { useParams, useLocation } from "react-router-dom";
import Category from "./Category.jsx";

const Menu = () => {
  const Params = useParams();
  const location = useLocation();
  console.log("Params:", Params);
  console.log("Location:", location);

  return (
    <>
      <Category />
    </>
  );
};

export default Menu;
