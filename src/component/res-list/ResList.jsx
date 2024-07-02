import "./resList.css";
import { useState } from "react";
import { restaurants } from "../../getStaticData.js";
import ResCard from "../res-card/ResCard.jsx";
import SearchBar from "../search/SearchBar.jsx";
function ResList() {
  const [searchVal, setSearchVal] = useState("");
  return (
    <>
      <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      <div className="card-container">
        {restaurants
          .filter((item) => {
            if (searchVal === "") {
              return item;
            } else if (
              item.cuisines.some((cuisine) =>
                cuisine.toLowerCase().includes(searchVal.toLowerCase())
              )
            ) {
              return item;
            }
          })
          .map((item) => {
            return <ResCard restaurant={item} />;
          })}
      </div>
    </>
  );
}

export default ResList;
