import React from "react";
import { useDispatch, useSelector } from "react-redux";

function CartView() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const renderCartLines = () => {
    return Object.keys(cart).map((key, index) => {
      const cartLine = cart[key];
      return (
        <tr key={index}>
          <td>{cartLine.name}</td>
          <td>&#8377;{cartLine.price}</td>
          <td>
            <>
              <div className="d-flex justify-content-around">
                <button onClick={e => dispatch({ type: "CHANGE_CARTLINE_QTY", payload: { id: cartLine.id, qty: -1 } })} className="btn btn-primary">-</button>
                <span>{cartLine.quantity}</span>
                <button onClick={e => dispatch({ type: "CHANGE_CARTLINE_QTY", payload: { id: cartLine.id, qty: 1 } })} className="btn btn-primary">+</button>
              </div>
            </>
          </td>
          <td>&#8377;{cartLine.price * 1}</td>
        </tr>
      );
    });
  };
  return (
    <div className="card">
      <div className="card-header">Cart View</div>
      <div className="card-body">
        <table className="table table-bordered">
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
