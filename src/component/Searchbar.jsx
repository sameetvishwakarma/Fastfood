import { useState } from "react";

const Searchbar = () => {
  const [searchText, setSerachText] = useState("");
  const [filterData, setFilterData] = useState([]);

  const handleSearchItem = () => {
    // console.log("handleSearchItem");
    const newArray = filterData.filter((restaurant) =>
      restaurant?.info?.name.includes(searchText)
    );
    console.log("newArray", newArray);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter the items"
          className="border border-gray-400"
          value={searchText}
          onChange={(e) => setSerachText(e.target.value)}
        />
        <button onClick={handleSearchItem}>Search</button>
      </div>
    </>
  );
};

export default Searchbar;
