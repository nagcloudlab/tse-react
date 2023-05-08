import React, { useState } from "react";
import classNames from "classnames";
export default function App() {
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
  const [currentTab, setCurrentTab] = useState(1);

  const renderTabPanel = (product) => {
    switch (currentTab) {
      case 1:
        return <div>{product.description}</div>;
      case 2:
        return <div>Not Yet</div>;
      case 3:
        return <div>None Yet</div>;
      default:
        return null;
    }
  };

  const renderProduct = (product) => {
    return (
      <div className="list-group-item" key={product.id}>
        <div className="row">
          <div className="col-4">
            <img src={product.image} className="img-fluid" alt={product.name} />
          </div>
          <div className="col-8">
            <div>{product.name}</div>
            <div>{product.price}</div>
            <button disabled={!product.isAvailable} className="btn btn-primary">
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
      </div>
    );
  };

  const renderProducts = () => {
    return products.map((product) => {
      return renderProduct(product);
    });
  };

  return (
    <div className="container">
      <div className="display-1">shop-IT</div>
      <hr />
      <div className="list-group">{renderProducts()}</div>
    </div>
  );
}
