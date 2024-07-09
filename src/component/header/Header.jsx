import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <IoFastFoodSharp color="red" fontSize={"30px"} />
      <div className="leftContent">
        <div className="cart-icon">
          <AiOutlineShoppingCart color="red" fontSize={"25px"} />
          <span className="cart-count">0</span>
        </div>
        <FaUserCircle color="red" fontSize={"30px"} />
      </div>
    </div>
  );
};

export default Header;
