import React from "react";
import { useSelector } from "react-redux";

function CartBadge() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <i
        className="fa fa-shopping-cart"
        style={{ color: "red", fontSize: "25px" }}
      ></i>
      {Object.keys(cart).length} item(s) in cart
    </div>
  );
}

export default CartBadge;
