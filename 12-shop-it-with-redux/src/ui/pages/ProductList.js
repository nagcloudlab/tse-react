import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector, useDispatch } from "react-redux";

import { loadProducts } from "../../state/actions/products";

const ProductList = ({}) => {
  // const [products, setProducts] = useState([]);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
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
