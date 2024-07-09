import React from "react";
import "./searchBar.css";
import { FiChevronDown } from "react-icons/fi";

const SearchBar = ({
  searchVal,
  setSearchVal,
  veg,
  setVeg,
  setSortBy,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const handleSortChange = (e) => {
    setSortBy(e.target.getAttribute("value"));
    setIsDropdownOpen(false);
  };
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        placeholder="Search restaurants..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
      <div className="filter-wraper">
        <div className="dropdown-container">
          <button
            className="dropdown button"
            onClick={() => {
              setIsDropdownOpen((prev) => !prev);
            }}
          >
            Sort By:
            <FiChevronDown className="dropdown-icon" />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <div
                className="dropdown-item"
                value="low"
                onClick={handleSortChange}
              >
                Price: Low to High
              </div>
              <div
                className="dropdown-item"
                value="high"
                onClick={handleSortChange}
              >
                Price: High to Low
              </div>
            </div>
          )}
        </div>
        <button
          className="button text"
          onClick={() => {
            setVeg((prevVeg) => !prevVeg);
          }}
        >
          {!veg ? "Only Veg" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
