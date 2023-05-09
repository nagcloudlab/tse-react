import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import CartView from "./pages/CartView";
import NotFound from "./components/NotFound";

export default function App() {
  const [cart, setCart] = useState([]);
  const [message, setMessage] = useState("");
  const addToCart = (product) => {
    let productIndex = cart.findIndex((p) => p.id === product.id);
    if (productIndex === -1) setCart([...cart, product]);
    else {
      setMessage("Product already in cart");
      setTimeout(() => setMessage(""), 1000);
    }
  };
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cart={cart} message={message} />}>
        <Route index element={<Home />} />
        <Route
          path="products"
          element={<ProductList onBuy={(product) => addToCart(product)} />}
        />
        <Route path="cart" element={<CartView value={cart} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
