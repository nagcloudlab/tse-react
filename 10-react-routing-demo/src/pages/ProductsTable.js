import React, { useState } from "react";
import axios from "axios";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";

export default function ProductsTable() {
  const [products, setProducts] = useState(useLoaderData());
  const handleDelete = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then((res) => {
        console.log("check");
        setProducts(
          products.filter((product) => product.id !== Number.parseInt(id))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderProducts = () =>
    products.map((product) => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>
          <NavLink to={product.id.toString()}>{product.name}</NavLink>
        </td>
        <td>&#8377;{product.price}</td>
        <td>
          <NavLink to={"edit/" + product.id}>
            <i className="fa fa-edit"></i>
          </NavLink>
        </td>
        <td>
          <a onClick={(e) => handleDelete(e, product.id.toString())} href="/">
            <i className="fa fa-trash"></i>
          </a>
        </td>
      </tr>
    ));

  return (
    <div className="card">
      <div className="card-header">Products Table</div>
      <div className="card-body">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{renderProducts()}</tbody>
        </table>
        <hr />
        <Outlet />
      </div>
    </div>
  );
}
