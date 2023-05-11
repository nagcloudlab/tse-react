import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

import Header from "../components/Header";
import CartBadge from "../components/CartBadge";

export default function RootLayout() {
  return (
    <div className="container">
      <Header title="shop-IT" />
      <CartBadge />
      <hr />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">
            Products
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
