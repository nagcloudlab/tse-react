import React, { useState } from "react";
import classNames from "classnames";
import Review from "./Review";

const Product = (props) => {
  const { value: product, onBuy } = props;
  const [currentTab, setCurrentTab] = useState(1);
  const [reviews, setReviews] = useState([
    {
      rating: 4,
      comment: "I love this product",
      user: {
        id: 1,
        name: "John Doe",
      },
    },
    {
      rating: 3,
      comment: "I like this product",
      user: {
        id: 1,
        name: "Nag",
      },
    },
  ]);
  const renderReviews = () => {
    return reviews.map((rev, index) => {
      return <Review value={rev} key={index} />;
    });
  };
  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1:
        return <div>{product.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return <div>{renderReviews()}</div>;
      default:
        return null;
    }
  };
  const handleBuy = () => {
    onBuy(product);
  };
  return (
    <div className="row">
      <div className="col-4">
        <img src={product.image} className="img-fluid" alt={product.name} />
      </div>
      <div className="col-8">
        <div>{product.name}</div>
        <div>&#8377;{product.price}</div>
        <button
          onClick={(e) => handleBuy()}
          disabled={!product.isAvailable}
          className="btn btn-primary"
        >
          Buy
        </button>
        <br />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={classNames({
                "nav-link": true,
                active: currentTab === 1,
              })}
              href="#"
              onClick={(e) => setCurrentTab(1)}
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentTab === 2 ? "active" : ""}`}
              href="#"
              onClick={(e) => setCurrentTab(2)}
            >
              Specfication
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentTab === 3 ? "active" : ""}`}
              href="#"
              onClick={(e) => setCurrentTab(3)}
            >
              Reviews
            </a>
          </li>
        </ul>
        {renderTabPanel(product)}
      </div>
    </div>
  );
};

export default Product;
