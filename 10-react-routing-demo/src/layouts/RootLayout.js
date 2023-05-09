import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="container">
      <div className="display-1">react router demo</div>
      <hr />
      <div className="row">
        <div className="col-4">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                View Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="new">
                Add New Product
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
