import React, { useState, useEffect } from "react";
import classNames from "classnames";
import Review from "./Review";
import ReviewForm from "./ReviewForm";
import { useDispatch, useSelector } from "react-redux";
import { loadReviews, addNewReview } from "../../state/actions/reviews";
import { addToCart } from "../../state/actions/cart";

const Product = (props) => {
  const { value: product } = props;

  const dispatch = useDispatch();
  const cartLine = useSelector((state) => state.cart[product.id] || {});
  const reviews = useSelector((state) => state.reviews[product.id] || []);
  const [currentTab, setCurrentTab] = useState(1);

  useEffect(() => {
    if (currentTab === 3) {
      dispatch(loadReviews(product.id));
    }
  }, [currentTab]);

  const handleBuy = () => {
    dispatch(addToCart(product));
  };
  const handleNewReview = (review) => {
    dispatch(addNewReview(product.id, review));
  };
  const handleTabChange = (event, tab) => {
    event.preventDefault();
    setCurrentTab(tab);
  };
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
        return (
          <div>
            {renderReviews()}
            <ReviewForm onNewReview={(review) => handleNewReview(review)} />
          </div>
        );
      default:
        return null;
    }
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
          Buy ({cartLine.quantity || 0})
        </button>
        <div className="text text-warning">{cartLine.message}</div>
        <br />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              className={classNames({
                "nav-link": true,
                active: currentTab === 1,
              })}
              href="/"
              onClick={(e) => handleTabChange(e, 1)}
            >
              Description
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentTab === 2 ? "active" : ""}`}
              href="/"
              onClick={(e) => handleTabChange(e, 2)}
            >
              Specfication
            </a>
          </li>
          <li className="nav-item">
            <a
              className={`nav-link ${currentTab === 3 ? "active" : ""}`}
              href="/"
              onClick={(e) => handleTabChange(e, 3)}
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
