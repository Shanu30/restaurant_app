import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <IoFastFoodSharp color="red" fontSize={"30px"} />
      <FaUserCircle color="red" fontSize={"30px"} />
    </div>
  );
};

export default Header;
