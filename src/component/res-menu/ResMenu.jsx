import React from "react";
import { menuItems } from "../../getStaticData";
import "./resMenu.css";
import { IoMdRadioButtonOn } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

const ResMenu = () => {
  // const { parentId, name, area, completeAddress, menu } = menuItems;
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div className="menu-item" key={item.id}>
          <div className="left-section">
            <IoMdRadioButtonOn color={`${item.isVeg ? "green" : "red"}`} />
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="right-section">
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
              alt={item.name}
              className="menu-item-image"
            />
            <button className="add-button" onClick={() => handleAddItem(item)}>
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResMenu;
