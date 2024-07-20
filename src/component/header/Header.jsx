import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  return (
    <div className="header">
      <Link to="/">
        <IoFastFoodSharp color="red" fontSize={"30px"} />
      </Link>
      <div className="leftContent">
        <Link to="/cart" className="cart-icon">
          <AiOutlineShoppingCart color="red" fontSize={"25px"} />
          <span className="cart-count">{cart.length}</span>
        </Link>
        <FaUserCircle color="red" fontSize={"30px"} />
      </div>
    </div>
  );
};
export default Header;
