import React from "react";

function CartView({ value: cart }) {
  const renderCartLines = () => {
    return cart.map((cartLine, index) => {
      return (
        <tr key={index}>
          <td>{cartLine.name}</td>
          <td>&#8377;{cartLine.price}</td>
          <td>{1}</td>
          <td>&#8377;{cartLine.price * 1}</td>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header">Cart View</div>
      <div className="card-body">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>{renderCartLines()}</tbody>
        </table>
      </div>
    </div>
  );
}

export default CartView;
