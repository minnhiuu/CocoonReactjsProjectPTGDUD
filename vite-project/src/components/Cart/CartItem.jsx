import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsDisplay } from "react-icons/bs";
import { Card, Button } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../../context/cart";
import { Link, useNavigate } from "react-router-dom";
import "./CartItem.css";

export default function CartItem(props) {
  const {
    addToCart,
    removeFromCart,
    decreaseItem,
    increaseItem,
    calculateDiscountedPrice,
  } = useContext(CartContext);
  const { cart, onCartUpdate } = props;
  const [quantity, setQuantity] = useState(cart.quantity);

  const handleIncrease = () => {
    increaseItem(cart);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      decreaseItem(cart);
      setQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      removeFromCart(cart);
      onCartUpdate();
    }
  };
  return (
    <>
      <div
        className="cart-item mb-3 text-dark "
        style={{ textDecoration: "none" }}
      >
        <button className="btn-closeCart" onClick={() => removeFromCart(cart)}>
          {" "}
          <AiOutlineClose />
        </button>
        <Link
          className="cardImg"
          to={`/cocoon/san-pham/${cart.id}`}
          style={{ textDecoration: "none" }}
        >
          <img
            src={cart.img}
            alt={cart.title}
            className=""
            style={{ aspectRatio: "3/4" }}
          />
        </Link>
        <div className="cardContent">
          <h5>{cart.title}</h5>
          <div className="flex items-baseline gap-2">
            {/* <p>Price: {cart.price}</p> */}
            Price:
            {cart.discount !== "0%" ? (
              <>
                <p className="!text-red-500 !text-lg">
                  {calculateDiscountedPrice(
                    cart.price,
                    cart.discount
                  ).toLocaleString()}{" "}
                  đ
                </p>
                <p className="!text-[12px] text-gray-500 line-through">
                  {cart.price.toLocaleString()}
                </p>
              </>
            ) : (
              <p className="!text-red-500 !text-lg">
                {cart.price.toLocaleString()}
              </p>
            )}
          </div>
          <div className="cardActions">
            <div className="quantity">
              <button
                className="text-center"
                style={{ width: "35px", height: "35px", alignItems: "center" }}
                onClick={() => {
                  handleDecrease();
                }}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                className="text-center"
                style={{ width: "35px", height: "35px", alignItems: "center" }}
                onClick={() => {
                  handleIncrease();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
