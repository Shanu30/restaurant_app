import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import "./header.css";

const Header = () => {
  return (
    <div
      className="header"
      style={{
        padding: "0 100px",
        position: "sticky",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        backgroundColor: "#e8e7e7",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
      }}
    >
      <IoFastFoodSharp color="red" fontSize={"30px"} />
      <FaUserCircle color="red" fontSize={"30px"} />
    </div>
  );
};

export default Header;
