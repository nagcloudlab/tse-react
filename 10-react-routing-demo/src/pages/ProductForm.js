import React, { useEffect, useState } from "react";
import { redirect, useLoaderData, useNavigate } from "react-router-dom";

import axios from "axios";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const product = useLoaderData();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const p = {
      name,
      price,
      description,
    };
    if (product) {
      axios
        .put("http://localhost:8080/products/" + product.id, p)
        .then((res) => {
          navigate("/products");
        });
    } else {
      axios.post("http://localhost:8080/products", p).then((res) => {
        navigate("/products");
      });
    }
  };
  return (
    <div className="card">
      <div className="card-header">Product Form</div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
