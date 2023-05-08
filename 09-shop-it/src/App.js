import { useState } from "react";
import CartBadge from "./components/CartBadge";
import CartView from "./components/CartView";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="container">
      <Header title="shop-IT" />
      <CartBadge value={cart.length} />
      <hr />
      <CartView value={cart} />
      <hr />
      <ProductList onBuy={(product) => setCart([...cart, product])} />
    </div>
  );
}
