import React, { useState } from "react";
import Product from "../components/Product";

const ProductList = ({ onBuy }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      price: 2000,
      isAvailable: true,
      description: "Laptop description",
      image: "images/Laptop.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 1000,
      isAvailable: true,
      description: "Mobile description",
      image: "images/Mobile.png",
    },
  ]);
  const renderProduct = (product) => {
    return (
      <div className="list-group-item" key={product.id}>
        <Product value={product} onBuy={onBuy} />
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
