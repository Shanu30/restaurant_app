import React from "react";
import "./resCard.css";
import { TiStarFullOutline } from "react-icons/ti";
import { GoDotFill } from "react-icons/go";

const ResCard = ({ restaurant }) => {
  return (
    <div className="restaurant-card" key={restaurant.id}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}
        alt={restaurant.name}
      />
      <div className="restaurant-card-content">
        <h2 className="text-overflow">{restaurant.name}</h2>
        <div className="rating">
          <TiStarFullOutline color="green" fontSize={"15px"} />
          <div>{restaurant.avgRating}</div>
          <GoDotFill style={{ marginTop: "2px", marginLeft: "5px" }} />
          <div style={{ marginLeft: "5px" }}>{restaurant.sla}</div>
        </div>
        <div className="cost">{restaurant.costForTwo}</div>
        <div className="address text-overflow">
          {restaurant.cuisines.join(", ")}
        </div>
        <div className="address">{restaurant.locality}</div>
      </div>
    </div>
  );
};

export default ResCard;
