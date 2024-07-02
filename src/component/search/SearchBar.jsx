import React from "react";
import "./searchBar.css";
import { FiFilter } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";

const SearchBar = ({ searchVal, setSearchVal }) => {
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
          <button className="dropdown button">
            Sort By:
            <FiChevronDown className="dropdown-icon" />
          </button>
          <select
            className="dropdown-select"
            // value={sortBy}
            // onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>
        <button className="button text">Pure Veg</button>
        <button className="button text">Only Non Veg</button>
      </div>
    </div>
  );
};

export default SearchBar;
