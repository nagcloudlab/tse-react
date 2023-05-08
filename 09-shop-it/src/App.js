import { useState } from "react";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);
  const [message, setMessage] = useState("");
  const toggleCart = (e) => {
    e.preventDefault();
    setCartOpen(!isCartOpen);
  };
  const addToCart = (product) => {
    let productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex === -1) setCart([...cart, product]);
    else setMessage("Product already in cart");
  };
  return (
    <div className="container">
      <Header title="shop-IT" />
      <CartBadge value={cart.length} />
      <hr />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" onClick={toggleCart} href="/">
            {isCartOpen ? "Products" : "Cart"}
          </a>
        </li>
      </ul>
      <hr />
      {isCartOpen ? (
        <CartView value={cart} />
      ) : (
        <>
          <div>{message}</div>
          <ProductList onBuy={(product) => addToCart(product)} />
        </>
      )}
    </div>
  );
}
