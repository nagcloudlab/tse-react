import React, { useState } from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const ProductList = ({ }) => {
  const products = useSelector(state => state.products)
  const renderProduct = (product) => {
    return (
      <div className="list-group-item" key={product.id}>
        <Product value={product} />
      </div>
    );
  };
  const renderProducts = () => {
    return products.map((product) => {
      return renderProduct(product);
    });
  };

  return <div className="list-group">{renderProducts()}</div>;
};

export default ProductList;
