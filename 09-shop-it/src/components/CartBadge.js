import React from "react";

function CartBadge({ value }) {
  return (
    <div>
      <i
        className="fa fa-shopping-cart"
        style={{ color: "red", fontSize: "25px" }}
      ></i>
      {value} item(s) in cart
    </div>
  );
}

export default CartBadge;
