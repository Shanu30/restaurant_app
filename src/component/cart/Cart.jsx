import React from "react";
import { useSelector } from "react-redux";
import { IoMdRadioButtonOn } from "react-icons/io";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  let cart = useSelector((store) => store.cart.items);
  const removeItem = (itemId) => {
    cart = (prevItems) => prevItems.filter((item) => item.id !== itemId);
  };

  const getTotal = cart.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="left-container">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${item.imageId}`}
                  alt={item.name}
                  className="item-image"
                />
                <IoMdRadioButtonOn
                  className="veg-icon"
                  color={`${item.isVeg ? "green" : "red"}`}
                />
                <h3>{item.name}</h3>
              </div>
              <div className="right-container">
                <p>₹{item.price}</p>
                <button
                  className="remove-button"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="checkout-button">
        <h3>Total: {getTotal}</h3>
        <button
          onClick={() => {
            alert("Order Placed");
            navigate("/");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
