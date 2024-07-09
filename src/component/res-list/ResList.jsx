import "./resList.css";
import { useState } from "react";
import { restaurants } from "../../getStaticData.js";
import ResCard from "../res-card/ResCard.jsx";
import SearchBar from "../search/SearchBar.jsx";
function ResList() {
  const [searchVal, setSearchVal] = useState("");
  const [veg, setVeg] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filteredRestaurants = restaurants
    .filter((restaurant) => {
      const matchesSearch =
        searchVal === "" ||
        restaurant.cuisines.some((cuisine) =>
          cuisine.toLowerCase().includes(searchVal.toLowerCase())
        );
      const matchesVeg = !veg || restaurant.veg;
      return matchesSearch && matchesVeg;
    })
    .sort((a, b) => {
      if (sortBy === "low") {
        return (
          parseInt(a.costForTwo.replace("₹", "").replace(" for two", ""), 10) -
          parseInt(b.costForTwo.replace("₹", "").replace(" for two", ""), 10)
        );
      } else if (sortBy === "high") {
        return (
          parseInt(b.costForTwo.replace("₹", "").replace(" for two", ""), 10) -
          parseInt(a.costForTwo.replace("₹", "").replace(" for two", ""), 10)
        );
      } else {
        return 0;
      }
    });
  return (
    <>
      <SearchBar
        searchVal={searchVal}
        setSearchVal={setSearchVal}
        veg={veg}
        setVeg={setVeg}
        sortBy={sortBy}
        setSortBy={setSortBy}
        isDropdownOpen={isDropdownOpen}
        setIsDropdownOpen={setIsDropdownOpen}
      />
      <div className="card-container">
        {filteredRestaurants.map((item) => {
          return <ResCard key={item.id} restaurant={item} />;
        })}
      </div>
    </>
  );
}

export default ResList;
